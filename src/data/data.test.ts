import { test } from 'node:test';
import assert from 'node:assert/strict';

import { properties } from './properties.ts';
import { projects } from './projects.ts';
import { locations } from './locations.ts';

/**
 * `Property.location` and `Project.location` are plain strings that must match a
 * Location slug. Nothing enforces that at build: `getLocationName` falls back to
 * returning the raw slug, so a typo ships as an ugly label instead of an error.
 * These assertions are the guard.
 */

const locationSlugs = new Set(locations.map((l) => l.slug));
const projectSlugs = new Set(projects.map((p) => p.slug));

test('every property points at a real location', () => {
  for (const p of properties) {
    assert.ok(locationSlugs.has(p.location), `${p.slug} → unknown location "${p.location}"`);
  }
});

test('every project points at a real location', () => {
  for (const p of projects) {
    assert.ok(locationSlugs.has(p.location), `${p.slug} → unknown location "${p.location}"`);
  }
});

test('every property that names a project points at a real one', () => {
  for (const p of properties) {
    if (p.project === undefined) continue;
    assert.ok(projectSlugs.has(p.project), `${p.slug} → unknown project "${p.project}"`);
  }
});

test('slugs are unique', () => {
  for (const [label, list] of [
    ['property', properties],
    ['project', projects],
    ['location', locations],
  ] as const) {
    const slugs = list.map((r) => r.slug);
    assert.equal(new Set(slugs).size, slugs.length, `duplicate ${label} slug`);
  }
});

test('every listing has at least one image', () => {
  for (const p of properties) assert.ok(p.images.length > 0, `${p.slug} has no images`);
  for (const p of projects) assert.ok(p.images.length > 0, `${p.slug} has no images`);
});

test('nothing is marked verified while we are reproducing developer data', () => {
  // Flip this the day we start inspecting properties and documents ourselves.
  for (const p of properties) {
    assert.equal(p.verified, false, `${p.slug} is marked verified`);
  }
});
