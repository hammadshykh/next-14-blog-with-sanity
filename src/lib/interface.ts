// Define the structure for the titleImage if you know it (or keep it as `any` if it varies)
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
 titleImage: BlogImage | any; // Adjust based on your structure
 currentSlug: string;
}

// For the full blog (used for individual blog pages)
export interface FullBlog {
 currentSlug: string;
 title: string;
 content: string | any[]; // Adjust based on the content structure, like rich text blocks or simple strings
 titleImage: BlogImage | any; // Adjust based on your structure
}
