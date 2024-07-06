"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { AiOutlineMail, AiOutlineYoutube } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wf6ofxl",
        "template_i5od13u",
        form.current || "",
        "SlvP-FHSkNcXNqTxA"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Your message sent successfully!");
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full px-8 md:px-10 lg:px-32 gap-10 lg:gap-20 pt-20 md:pt-0 lg:py-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#061130]">
      <h2 className="text-3xl text-center font-bold text-white">Contact Me</h2>
      <hr className="text-white border-b-2 mt-2 w-16 mx-auto"></hr>
      <div
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        className="xl:mt-5 w-full items-center flex xl:flex-row flex-col-reverse md:gap-10 overflow-hidden mt-2"
      >
        <div className="md:w-1/2 bg-black-100 rounded-2xl ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-5 flex flex-col gap-5"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="bg-gray-800 py-3 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your email</span>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="bg-gray-800 py-3 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={7}
                name="message"
                placeholder="Enter your message"
                className="bg-gray-800 py-3 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-3 px-8 rounded-md outline-none w-fit text-white font-bold shadow-md"
            >
              Send
            </button>
            <ToastContainer />
          </form>
        </div>
        {/* 
        <div className="md:w-1/2">
          <Image width={500} height={500} src="/assets/contact.png" alt="" />
        </div> */}

        <div className="md:w-1/2 text-white font-medium text-xl">
          {/* <img src="/contact.png" alt="" /> */}
          <div className="mb-2 text-white ms-2 md:ms-14 font-semibold  text-xl flex items-center gap-2">
            <AiOutlineMail />
            <h4 className="font-medium">naimur2231@gmail.com</h4>
          </div>

          <div className="text-white ms-2 md:ms-14 flex gap-2 items-center font-medium text-xl">
            <BiPhoneCall />
            <h4 className="font-medium text-xl">+8801983835309</h4>
          </div>
          {/* <div className="mb-2 text-white ms-2 md:ms-14 font-semibold text-lg flex items-center gap-2">
            <FaFax />
            <h4 className="">FAX: +212 633-337432</h4>
          </div> */}
          <div className="mt-7 text-white ms-2 md:ms-14  items-center font-medium text-xl">
            <div className="flex gap-2 items-center">
              <MdOutlineAddLocationAlt />
              <h4>Konabari, Gazipur,</h4>
            </div>
            <h3 className="ms-7">Dhaka, Bangladesh</h3>
          </div>

          <div className="flex ms-2 md:ms-14 gap-4 mt-7 text-white text-xl justify-center md:justify-start">
            <Link target="_blank" href="https://www.facebook.com/naimur22315">
              <FiFacebook className="text-3xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/naimur22315/"
            >
              <FiLinkedin className="text-3xl" />
            </Link>
            <Link target="_blank" href="">
              <FiTwitter className="text-3xl" />
            </Link>
            <AiOutlineYoutube target="_blank" className="text-3xl" />
            <Link target="_blank" href="">
              <FiInstagram className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
