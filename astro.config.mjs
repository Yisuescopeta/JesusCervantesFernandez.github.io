import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER?.toLowerCase() ?? '';
const isUserSiteRepository =
  repositoryOwner && repository.toLowerCase() === `${repositoryOwner}.github.io`;
const base = repository && !isUserSiteRepository ? `/${repository}` : '/';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://yisuescopeta.github.io',
  base,
});
