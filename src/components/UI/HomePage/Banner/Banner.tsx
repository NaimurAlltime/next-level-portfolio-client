"use client";

import { BiDownload } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import Image from "next/image";
// import resumePdf from "/Resume of Naimur Rahman.pdf";

const Banner = () => {
  return (
    <div className="w-full flex items-center flex-col lg:flex-row md:px-10 gap-3 2xl:gap-20 px-5 lg:px-12 2xl:px-32 py-20 lg:py-24 bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
      <div
        className="flex flex-col mb-20 lg:mb-0"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <span className="text-xl font-bold  text-orange-500">
          I Am Naimur Rahman ____
        </span>
        <div className="flex gap-4 items-center my-4">
          <div className="flex items-center justify-center shadow-lg  bg-[#224cff10] text-neutral-100 rounded-full">
            {/* "Full Stack Developer" */}
            <ReactTyped
              className="text-3xl 2xl:text-5xl font-bold pr-3 py-2 pb-2 text-center"
              typeSpeed={60}
              backSpeed={35}
              loop
              strings={[
                "Full Stack Developer",
                "Frontend Developer ",
                "React Js Developer",
                "MERN Stack Developer",
                "JavaScript Developer",
              ]}
            />
          </div>
        </div>

        <p className="text-md text-gray-100 mt-5 2xl:mt-7">
          Full-Stack Web Developer with ability to learn and collaborate in
          rapidly changing environments and compositions.
        </p>

        <div className="mt-10 flex gap-10">
          <a
            className="bg-orange-700 flex items-center text-lg text-white font-semibold rounded-md py-3 px-5"
            // href={resumePdf}
            download
          >
            Download Resume <BiDownload className="ml-2" />
          </a>
        </div>
      </div>

      <div className="w-full flex-1 flex justify-center">
        <div className="w-[300px] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px]  border rounded-full border-gray-200 relative mt-0  md:mt-20 lg:mt-12 flex items-center justify-center">
          <Image
            width={500}
            height={500}
            src="/assets/profile1.png"
            className="w-auto p-10 h-full absolute -top-5 md:-top-10"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            alt="profile-img"
          />
          <div
            className="relative w-full h-full rounded-full"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image
              width={500}
              height={500}
              src="/assets/reactjs.svg"
              className="absolute top-7 md:top-20 left-3 md:-left-3 2xl:left-2 w-12 h-12 md:w-16 md:h-16"
              alt="img"
            />
            <Image
              width={500}
              height={500}
              src="/assets/redux.svg"
              className="absolute bottom-7 left-3 md:bottom-10 2xl:left-12 w-12 h-12 md:w-16 md:h-16"
              alt="img"
            />
            <Image
              width={500}
              height={500}
              src="/assets/mongodb.svg"
              className="absolute top-5 md:top-14 right-3 md:-right-3 2xl:right-2 w-12 h-12 md:w-16 md:h-16"
              alt="img"
            />
            <Image
              width={500}
              height={500}
              src="/assets/nodejs.svg"
              className="absolute bottom-7 right-3 md:bottom-10 2xl:right-12 w-12 h-12 md:w-16 md:h-16"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
