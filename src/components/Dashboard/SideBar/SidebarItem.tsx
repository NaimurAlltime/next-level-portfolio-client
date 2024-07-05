"use client"; // Ensure this component is rendered on the client side
import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { DrawerItem } from "@/types";
import { usePathname } from "next/navigation";

type IProps = {
  item: DrawerItem;
};

const normalizePath = (path: string) => {
  return path.replace(/^\/+|\/+$/g, ""); // Remove leading and trailing slashes
};

const SidebarItem = ({ item }: IProps) => {
  const linkPath = normalizePath(item.path); // Use item.path directly
  const pathname = normalizePath(usePathname());

  const isActive = pathname === linkPath;

  return (
    <Link href={item.path} passHref>
      <ListItem
        disablePadding
        sx={{
          mb: 1,
          ...(isActive && {
            borderRight: "3px solid #1586FD",
            backgroundColor: "#e0f7fa",
            "& svg": {
              color: "#1586FD",
            },
          }),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
