const BlogCard = ({ blog }: any) => {
  const { title, img, date, posted_by, description } = blog;
  return (
    <div className="card card-compact w-full md:w-[400px] bg-base-100 shadow-xl p-2 md:p-0 border  border-gray-300 rounded-sm">
      <figure>
        <img className="h-72 w-full" src={img} alt="blog" />
      </figure>

      <div className="card-body text-white p-3">
        <h2 className="card-title text-xl font-semibold"> {title} </h2>
        <p className="text-gray-300 mt-2">{description.slice(0, 87)} ...</p>
        <div className="card-actions">
          <button className="border border-orange-500 text-orange-500 px-3 py-1 rounded-md mt-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;