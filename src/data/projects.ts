import type { Project } from '../types';
import { check, fromFiles } from './entries';
import { getLocationBySlug } from './locations';

/**
 * Every development we list, from the partner developer whose stock this site
 * carries. The facts here are the developer's own: unit counts, built-up areas,
 * possession dates, amenities and specification are reproduced as published.
 * Edited through /admin (src/content/projects/).
 *
 * Two things the developer does not publish, and which are therefore absent
 * rather than estimated: prices (`startingPrice`) and per-flat areas. Ask for
 * both and fill them in — do not infer them from the built-up totals.
 */
const projects = fromFiles<Project>(
  import.meta.glob<Omit<Project, 'slug'>>('../content/projects/*.json', { eager: true, import: 'default' }),
);

for (const p of projects) {
  const file = `src/content/projects/${p.slug}.json`;
  check(getLocationBySlug(p.location), file, `unknown location "${p.location}"`);
  check(p.images?.length, file, 'has no photos');
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}

export function getProjectsByLocation(locationSlug: string): Project[] {
  return projects.filter((p) => p.location === locationSlug);
}

export function getSimilarProjects(project: Project, limit = 3): Project[] {
  return projects
    .filter((p) => p.slug !== project.slug)
    .sort(
      (a, b) =>
        (b.location === project.location ? 1 : 0) - (a.location === project.location ? 1 : 0),
    )
    .slice(0, limit);
}
