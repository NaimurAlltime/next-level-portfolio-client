import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: any) => {
  const { name, cover, description, _id } = project;

  return (
    <div className="lg:p-0 p-2 mx-3">
      {/* Card */}
      <a
        className="group flex flex-col border shadow-sm rounded-xl hover:shadow-lg transition h-[400px] w-full"
        href="#"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="w-full h-[220px] relative">
          <Image
            className="object-cover rounded-t-xl hover:scale-105 transition-transform duration-500 ease-in-out"
            src={cover}
            layout="fill"
            quality={90}
            alt={name}
          />
        </div>
        <div className="text-center px-2 flex-grow">
          <h2 className="text-xl font-semibold mt-3 text-white">{name}</h2>
          <p className="mt-3 text-gray-300">{description?.slice(0, 96)}...</p>
        </div>
        <div className="mt-auto bg-[#e9e9e9] w-full text-end rounded-b-lg">
          <Link href={`/projects/${_id}`}>
            <button className="text-[20px] font-medium text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-2 mb-2">
              Details
            </button>
          </Link>
        </div>
      </a>
      {/* End Card */}
    </div>
  );
};

export default ProjectCard;
