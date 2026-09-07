import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Buying', 'Investment', 'Locations', 'Guides']),
    /** Key from src/data/images.ts. */
    heroImage: z.string(),
    readingTime: z.number().int().positive(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
