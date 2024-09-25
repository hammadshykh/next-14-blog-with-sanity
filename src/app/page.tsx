import BlogCard from "@/components/blogCard";
import { getBlogData } from "@/lib/blogsData";
import { simpleBlogCard } from "@/lib/interface";

export default async function Home() {
 const blogs: simpleBlogCard[] = await getBlogData();
 console.log(blogs);
 return (
  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 my-10">
   {blogs.map((post, ind) => (
    <BlogCard key={ind} blog={{ ...post }} />
   ))}
  </div>
 );
}
