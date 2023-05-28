import { defineCollection, z } from "astro:content";
// import config from "../config";

// Blog
// const docs = defineCollection({
//   schema: z.object({
//     title: z.string().default(config.siteTitle),
//     description: z.string().default(config.siteDescription),
//     lang: z.literal("en-us").default("en-us"),
//     dir: z.union([z.literal("ltr"), z.literal("rtl")]).default("ltr"),
//     image: z
//       .object({
//         src: z.string(),
//         alt: z.string(),
//       })
//       .optional(),
//     ogLocale: z.string().optional(),
//   }),
// });

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});


export const collections = { blog };
