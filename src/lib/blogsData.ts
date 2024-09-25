import { client } from "@/lib/sanity";
import { simpleBlogCard } from "./interface";

// Function to fetch all blog data
export async function getBlogData() {
 const query = `
    *[_type == "blog"] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `;
 const data = await client.fetch(query);
 return data;
}

// Function to fetch blog data by slug
export async function getBlogById(slug: string) {
 const query = `
    *[_type == "blog" && slug.current == "${slug}"] {
     "currentSlug": slug.current,
      title,
      content,
      titleImage,
    }[0]
  `;
 const params = { slug };
 const data = await client.fetch(query, params);
 return data;
}
