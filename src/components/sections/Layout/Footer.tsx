import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] mt-16">
        <hr className="text-white" />

        <div className="w-full flex flex-col md:flex-row py-16 px-8 md:px-10 gap-10 lg:gap-20 justify-between ">
          <p className="text-lg text-white font-semibold ">
            Address
            <br />
            Gazipur, Dhaka, Bangladesh
          </p>

          <div className="flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white ">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </div>

          <div className="flex flex-col gap-5 text-md text-white ">
            <p>naimur2231@gmail.com</p>
            <p>+8801983835309</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center justify-center pb-12">
          <p className="text-white font-semibold tracking-wider">
            Social Media
          </p>

          <div className="flex gap-10 text-white text-2xl mb-3">
            <BsYoutube className="hover:scale-125" />
            <BsFacebook className="hover:scale-125" />
            <BsInstagram className="hover:scale-125" />
            <BsLinkedin className="hover:scale-110" />
            <AiFillTwitterCircle className="hover:scale-125" />
          </div>

          <p className="text-gray-400 text-md tracking-wider">
            {" "}
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
