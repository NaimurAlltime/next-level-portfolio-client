"use client";
import { Link } from "@/lib/router-events";
import { Button, Drawer, DrawerProps } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import HeaderDropdown from "./HeaderDropdown";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const [isTop, setIsTop] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => window.addEventListener("scroll", controlNavbar), []);
  return (
    <div
      className={`w-full fixed top-0 z-50   ${
        isTop ? "bg-primary bg-opacity-10" : "bg-white shadow-md"
      }`}
    >
      <div className=" h-full container px-5 mx-auto py-2 lg:py-5 flex items-center justify-between">
        <div className="flex gap-10 items-center justify-center ">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/imgs/logo.png"
              alt=""
              width={30}
              height={25}
              className="text-white w-[45px] h-[50px]"
            />
            <h1 className="text-xl font-sans lg:text-2xl ms-2 font-semibold">
              Naimur Rahman
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-4">
          {/* <Link href="/reservation" className="hover:underline font-semibold">
            Reservation
          </Link> */}
          <Link href="/" className="hover:underline font-semibold">
            Home
          </Link>
          <Link href="/about" className="hover:underline font-semibold">
            About Us
          </Link>
          <Link href="/skills" className="hover:underline font-semibold">
            Skills
          </Link>
          <Link href="/projects" className="hover:underline font-semibold">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline font-semibold">
            Contacts
          </Link>
        </div>
        <div className="flex  gap-10">
          <div className="items-center hidden lg:flex justify-center font-semibold">
            <Button size="large" type={!isTop ? "primary" : undefined}>
              Hire Me
            </Button>
          </div>
          <div className="lg:hidden flex justify-center items-center ">
            <MdMenu className="text-3xl cursor-pointer" onClick={showDrawer} />
          </div>
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="flex flex-col gap-5 ">
          <Link href="/" className="hover:underline font-semibold text-black">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:underline font-semibold text-black"
          >
            About Us
          </Link>
          <Link href="/skills" className="hover:underline font-semibold">
            Skills
          </Link>
          <Link href="/projects" className="hover:underline font-semibold">
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:underline font-semibold text-black"
          >
            Contacts
          </Link>
          <div className="flex gap-5 items-center justify-center font-semibold">
            <HeaderDropdown />
          </div>
          <div className="flex items-center justify-center font-semibold">
            <Button size="large" type={!isTop ? "primary" : undefined}>
              Hire Me
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
