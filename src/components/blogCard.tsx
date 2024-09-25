import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
const BlogCard = ({ blog }: { blog: simpleBlogCard }) => {
 return (
  <>
   <Card>
    <Image
     alt="image-blog"
     src={urlFor(blog.titleImage).url()}
     height={400}
     width={400}
     className="rounded-t-lg h-[200px] object-cover"
    />
    <CardContent className="mt-5">
     <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
     <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
      {blog.smallDescription}
     </p>
     <Button asChild className="w-full mt-7">
      <Link href={`/blog/${blog.currentSlug}`}>Read more</Link>
     </Button>
    </CardContent>
   </Card>
  </>
 );
};

export default BlogCard;
