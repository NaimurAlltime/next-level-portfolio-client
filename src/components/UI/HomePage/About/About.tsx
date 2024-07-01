import { BsWhatsapp } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdWifiCalling2 } from "react-icons/md";

import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:px-5 2xl:px-32 py-10 lg:py-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]">
      <div className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md">
        <Image
          width={400}
          height={400}
          src="/assets/profile1.png"
          className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"
          alt="about img"
        />
      </div>

      <div className="w-full flex flex-col">
        <p className="text-3xl font-bold text-white  ">About Me</p>
        <p className="text-lg text-gray-400 leading-10">
          Full-Stack Web Developer with ability to learn and collaborate in
          rapidly changing environments and compositions. Worked through hours
          of bootcamp structure, learning JavaScript, NodeJs, ReactJs and NextJs
          . Eager to tackle web development/design challenges to achieve lasting
          impacts on user experience.
        </p>

        <div
          className="mt-5 2xl:mt-10 flex flex-wrap gap-5"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <FaUserAlt size={14} /> Naimur Rahman
          </p>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <MdOutlineAlternateEmail size={14} /> naimur2231@gmail.com
          </p>
          <a
            href="https://wa.me/+11 234 567 897"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
          >
            <BsWhatsapp size={14} /> +88 01983 835309
          </a>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
            <MdWifiCalling2 size={14} /> +88 01988 135959
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
