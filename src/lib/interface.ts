// Define the structure for the titleImage if you know it (or keep it as `any` if it varies)
import { TypedObject } from "@sanity/types"; // Importing TypedObject from Sanity types
export interface BlogImage {
 url: string;
 alt: string;
 width: number;
 height: number;
}

// For the simple blog card (used in lists)
export interface simpleBlogCard {
 title: string;
 smallDescription: string;
 titleImage: string; // Adjust based on your structure
 currentSlug: string;
}

// For the full blog (used for individual blog pages)

export interface BlogContent {
 [key: string]: string; // This defines the content as an object with key-value pairs (both key and value are strings)
}
export interface FullBlog {
 currentSlug: string;
 title: string;
 content: TypedObject[]; // Adjust based on the content structure, like rich text blocks or simple strings
 titleImage: string; // Adjust based on your structure
}
