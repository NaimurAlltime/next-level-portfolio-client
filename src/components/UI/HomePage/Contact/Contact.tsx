"use client";

import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import {
  AiOutlineMail,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import Link from "next/link";
import { config } from "@/config";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.services";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const [userData, setUserData] = useState<any>(null);

  // ✅ browser-only code
  useEffect(() => {
    const data = getUserInfo();
    setUserData(data);
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      toast.error("Form not found");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        config.email_service_id,
        config.email_template_id,
        formRef.current,
        config.email_public_id
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        router.push("/");
      } else {
        toast.error("Failed to send message!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="w-full px-8 md:px-10 lg:px-32 gap-10 lg:gap-20 pt-20 lg:py-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#061130]">
      <h2 className="text-3xl text-center font-bold text-white">
        Contact Me
      </h2>
      <hr className="border-b-2 mt-2 w-16 mx-auto border-white" />

      <div
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        className="xl:mt-5 w-full flex xl:flex-row flex-col-reverse gap-10 overflow-hidden mt-5"
      >
        {/* ===== FORM ===== */}
        <div className="md:w-1/2">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            <label className="flex flex-col">
              <span className="text-white mb-2">Your Name</span>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="bg-gray-800 py-3 px-6 text-white rounded-lg outline-none"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white mb-2">Your Email</span>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="bg-gray-800 py-3 px-6 text-white rounded-lg outline-none"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white mb-2">Your Message</span>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Enter your message"
                className="bg-gray-800 py-3 px-6 text-white rounded-lg outline-none"
              />
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-600 to-orange-500 py-3 px-8 rounded-md w-fit text-white font-bold"
            >
              Send
            </button>
          </form>
        </div>

        {/* ===== INFO ===== */}
        <div className="md:w-1/2 text-white text-xl space-y-4">
          <div className="flex items-center gap-2">
            <AiOutlineMail />
            <span>naimur2231@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <BiPhoneCall />
            <span>+8801983835309</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <MdOutlineAddLocationAlt />
              <span>Konabari, Gazipur</span>
            </div>
            <span className="ml-6">Dhaka, Bangladesh</span>
          </div>

          <div className="flex gap-4 mt-6 text-2xl">
            <Link href="https://www.facebook.com/naimur22315" target="_blank">
              <FiFacebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/naimur22315/"
              target="_blank"
            >
              <FiLinkedin />
            </Link>
            <FiTwitter />
            <AiOutlineYoutube />
            <FiInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
