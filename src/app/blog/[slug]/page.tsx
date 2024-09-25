import { getBlogById } from "@/lib/blogsData";
import { FullBlog } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

export interface BlogParams {
 params: { slug: string };
}

const page = async ({ params }: BlogParams) => {
 const blog: FullBlog = await getBlogById(params.slug);
 console.log(blog);
 return (
  <div>
   <h1>
    <span className="block  text-center text-primary font-semibold text-base uppercase tracking-wide">
     Hammad Shaikh - Blog
    </span>
    <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
     {blog?.title}
    </span>
   </h1>
   <Image
    alt="Title Image"
    src={urlFor(blog.titleImage).url()}
    height={800}
    width={800}
    className="rounded-lg border mt-8 h-[350px] object-cover"
   />
   <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-headings:text-2xl prose-headings:underline prose-li:marker:text-primary prose-a:text-primary">
    <PortableText value={blog.content} />
   </div>
  </div>
 );
};

export default page;
