import { blogs } from "@/utils/data";
import BlogCard from "./BlogCard";

const Blogs = () => {
  //   const [blogs, setBlogs] = useState([]);

  //   useEffect(() => {
  //     fetch("https:///blogs")
  //       .then((res) => res.json())
  //       .then((data) => setBlogs(data));
  //   }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] py-20 px-4 md:px-12 lg:px-32">
      <h3 className="text-3xl font-bold text-center text-white">My Blog</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6">
        {blogs.map((blog: any) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
