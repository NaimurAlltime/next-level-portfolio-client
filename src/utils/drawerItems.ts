import { USER_ROLE } from "@/contants/role";
import { DrawerItem } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import GroupIcon from "@mui/icons-material/Group";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

export const drawerItems = (): DrawerItem[] => {
  const defaultMenus = [
    {
      title: "Dashboard",
      path: `/`,
      icon: DashboardIcon,
    },

    {
      title: "Skills",
      path: `/skills`,
      icon: DashboardIcon,
    },

    {
      title: "Educations",
      path: `/educations`,
      icon: DashboardIcon,
    },

    {
      title: "Experiences",
      path: `/experiences`,
      icon: DashboardIcon,
    },

    {
      title: "Projects",
      path: `/projects`,
      icon: DashboardIcon,
    },

    {
      title: "Blogs",
      path: `/blogs`,
      icon: DashboardIcon,
    },

    {
      title: "My Profile",
      path: "/profile",
      icon: PersonIcon,
    },
  ];

  return [...defaultMenus];
};
