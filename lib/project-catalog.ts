import snapshot from './github-projects.json';
import {projects as curated, type Project} from './portfolio-data';
export const githubProjects = snapshot.projects;
export const lastGithubSync = snapshot.syncedAt;
export const projects: Project[] = [
  ...curated.filter(p => !p.repo || p.private || githubProjects.some(g => g.repo === p.repo)).map(p => {
    const repo = !p.private && githubProjects.find(g => g.repo === p.repo);
    return repo ? {...p, description:repo.description, stack:repo.language || p.stack} : p;
  }),
  ...githubProjects.filter(g => !curated.some(p => p.repo === g.repo)).map(g => ({title:g.title, repo:g.repo, description:g.description, stack:g.language, category:'Projects'})),
];
