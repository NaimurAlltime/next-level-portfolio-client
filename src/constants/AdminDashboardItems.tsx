import { Link } from "@/lib/router-events";
import { MenuProps } from "antd";
import { BiSolidUser } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";

export type MenuItem = Required<MenuProps>["items"][number];

export const adminMenuItems: MenuItem[] = [
  {
    label: "Accounts",
    key: "accounts",
    icon: <BiSolidUser />,
    children: [
      {
        label: <Link href={`/admin/profile`}>My Profile</Link>,
        key: `/admin/profile`,
      },
    ],
  },
  {
    label: "Management",
    key: "Management",
    icon: <IoBagCheckOutline />,
    children: [
      {
        label: <Link href={`/admin/manage-location`}>Manage Locations</Link>,
        key: `/admin/manage-location`,
      },
      {
        label: <Link href={`/admin/manage-cars`}>Manage Cars</Link>,
        key: `/admin/manage-cars`,
      },
    ],
  },
];
