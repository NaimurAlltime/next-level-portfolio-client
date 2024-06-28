"use client";

import { useRouter } from "@/lib/router-events";
import { FloatButton } from "antd";
import { CgMenuCake } from "react-icons/cg";
import { MdContactMail, MdInfo, MdManageAccounts, MdOutlineSupportAgent } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";

const MobileMenu = () => {
  const router = useRouter()
  return (
    <div className="lg:hidden inline-block">
      <FloatButton.Group trigger="click" type="primary" style={{ right: 24 }} icon={<CgMenuCake />}>
        <FloatButton onClick={()=> router.push("/help")} icon={<MdOutlineSupportAgent />} tooltip={<p>Help</p>} />
        <FloatButton icon={<MdManageAccounts />} tooltip={<p>Manage Booking</p>} />
        <FloatButton onClick={()=> router.push("/reservation")} icon={<RiReservedFill />} tooltip={<p>Reservation</p>} />
        <FloatButton onClick={()=> router.push("/about")} icon={<MdInfo />} tooltip={<p>About us</p>} />
        <FloatButton onClick={()=> router.push("/contact")} icon={<MdContactMail />} tooltip={<p>Contact</p>} />
      </FloatButton.Group>
    </div>
  );
};

export default MobileMenu;
