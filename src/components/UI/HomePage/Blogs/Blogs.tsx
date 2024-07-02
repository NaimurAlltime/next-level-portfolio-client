"use client";
import BlogCard from "./BlogCard";
import Loader from "../../Loader";
import { useGetAllBlogQuery } from "@/redux/api/blog.api";

const Blogs = () => {
  const { data, isLoading } = useGetAllBlogQuery(undefined);

  if (isLoading) return <Loader />;

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] py-20 px-4 md:px-12 lg:px-32">
      <h3 className="text-3xl font-bold text-center text-white">My Blog</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6">
        {data?.data?.map((blog: any) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
