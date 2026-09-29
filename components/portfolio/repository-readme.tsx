import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import type {githubProjects} from '@/lib/project-catalog';
type Repo = (typeof githubProjects)[number];
export function repositoryUrl(value: string, repo: Repo, image = false) {
  try {
    const root = `https://${image ? 'raw.githubusercontent.com' : 'github.com'}/Azka1212/${repo.repo}/${image ? '' : 'blob/'}${encodeURIComponent(repo.branch)}/`;
    const base = root + repo.readmePath.split('/').slice(0,-1).map(encodeURIComponent).join('/') + (repo.readmePath.includes('/') ? '/' : '');
    const url = new URL(value, base);
    if (!['https:', 'http:', ...(image ? [] : ['mailto:'])].includes(url.protocol)) return '';
    if (value.startsWith('#')) return `https://github.com/Azka1212/${repo.repo}#${value.slice(1)}`;
    return url.href;
  } catch { return ''; }
}
export default function RepositoryReadme({repo}: {repo:Repo}) {
  return <details className="setup-guide readme-guide">
    <summary>Project details from GitHub</summary>
    <div className="readme-content">
      {repo.markdown ? <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSanitize]} urlTransform={(url,key) => repositoryUrl(url,repo,key==='src')} components={{
        a: ({children,href}) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
        img: ({src,alt}) => <img src={src} alt={alt || 'Project image'} loading="lazy" />,
        h1: ({children}) => <h3>{children}</h3>, h2: ({children}) => <h3>{children}</h3>,
        table: ({children}) => <div className="readme-table"><table>{children}</table></div>,
      }}>{repo.markdown}</Markdown> : <p>No README is available yet.</p>}
    </div>
    <a className="external" href={`https://github.com/Azka1212/${repo.repo}`} target="_blank" rel="noopener noreferrer">Open on GitHub ↗</a>
  </details>;
}
