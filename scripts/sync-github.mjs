import { readFile, writeFile, rename } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
export function eligible(repo, config) {
  return !repo.private && !repo.disabled && !config.exclude.includes(repo.name) &&
    (config.include.includes(repo.name) || (repo.topics || []).includes(config.topic));
}
export function summary(markdown, fallback) {
  const text = markdown.replace(/^#{1,6} .+$/gm, '').split(/\n\s*\n/).find(p => p.trim() && !/^(#|\s*<|!|\[|\||```|>|\*\*|[-*] )/.test(p.trim()));
  const plain = (text || fallback || 'Explore the project and its documentation.').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*`_]/g, '').replace(/\s+/g, ' ').trim();
  return plain.length <= 220 ? plain : plain.slice(0, 217).replace(/\s+\S*$/, '') + '…';
}
export function pruneSnapshot(snapshot, config) {
  return {...snapshot, projects: snapshot.projects.filter(p => !config.exclude.includes(p.repo))};
}
export async function collect(config, previous, api) {
  const repos = [];
  for (let page = 1; ; page++) {
    const batch = await api(`/users/${config.owner}/repos?per_page=100&type=owner&page=${page}`);
    if (!Array.isArray(batch)) throw Error('Invalid repository list');
    repos.push(...batch);
    if (batch.length < 100) break;
  }
  const projects = [];
  for (const repo of repos.filter(r => eligible(r, config))) {
    let markdown = '', readmePath = 'README.md';
    let readmeSyncedAt = new Date().toISOString();
    try {
      const readme = await api(`/repos/${config.owner}/${repo.name}/readme`);
      if (readme) {
        if (readme.encoding !== 'base64' || readme.size > 300000) throw Error('Unsupported README size or encoding');
        markdown = Buffer.from(readme.content, 'base64').toString('utf8');
        readmePath = readme.path;
      }
    } catch (error) {
      const old = previous.projects.find(p => p.repo === repo.name);
      if (old) { markdown = old.markdown; readmePath = old.readmePath; readmeSyncedAt = old.readmeSyncedAt; }
      else readmeSyncedAt = '';
      console.warn(`README refresh failed for ${repo.name}; retaining available content.`);
    }
    projects.push({repo:repo.name, title:repo.name.replace(/[-_]+/g, ' '), description:summary(markdown,repo.description), language:repo.language || '', topics:repo.topics || [], branch:repo.default_branch, updatedAt:repo.pushed_at, markdown, readmePath, readmeSyncedAt});
  }
  return {syncedAt:new Date().toISOString(),projects};
}
async function main() {
  const config = JSON.parse(await readFile(new URL('./github-config.json', import.meta.url)));
  const destination = new URL('../lib/github-projects.json', import.meta.url);
  let previous = {syncedAt:'',projects:[]};
  try { previous = JSON.parse(await readFile(destination)); } catch {}
  previous = pruneSnapshot(previous, config);
  const api = async path => {
    const headers = {Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const response = await fetch(`https://api.github.com${path}`, {headers,signal:AbortSignal.timeout(20000)});
    if (response.status === 404 && path.endsWith('/readme')) return null;
    if (!response.ok) throw Error(`GitHub returned ${response.status}`);
    return response.json();
  };
  try {
    const snapshot = await collect(config, previous, api);
    await writeFile(new URL('../lib/github-projects.json.tmp', import.meta.url), JSON.stringify(snapshot,null,2)+'\n');
    await rename(new URL('../lib/github-projects.json.tmp', import.meta.url), destination);
    console.log(`Synced ${snapshot.projects.length} public repositories.`);
  } catch (error) {
    if (!previous.syncedAt) throw error;
    await writeFile(destination, JSON.stringify(previous,null,2)+"\n");
    console.warn(`GitHub sync unavailable; keeping snapshot from ${previous.syncedAt}.`);
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
