import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: any) => {
  const { title, cover, text, _id } = blog;
  return (
    <div className="w-full md:w-[400px] bg-base-100 shadow-xl p-2 md:p-0 border  border-gray-300 rounded-sm">
      <figure>
        <Image
          width={420}
          height={350}
          className="h-72 w-full"
          src={cover}
          alt="blog"
        />
      </figure>

      <div className="card-body text-white p-3">
        <h2 className="card-title text-xl font-semibold"> {title} </h2>
        {/* <p className="text-gray-300 mt-2">{text?.slice(0, 87)} ...</p> */}
        <Typography
          mt={1}
          variant="body2"
          color="lightgray"
          component="div"
          dangerouslySetInnerHTML={{
            __html: blog.text.slice(0, 99) + "...",
          }}
        />

        <div className="card-actions">
          <Link href={`/blogs/${_id}`}>
            <button className="border border-orange-500 text-orange-500 px-3 py-1 rounded-md mt-3">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
