import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import GroupIcon from "@mui/icons-material/Group";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Dashboard",
      path: `/dashboard`,
      icon: DashboardIcon,
    },

    {
      title: "Skill",
      path: `/skill`,
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
      title: "Blog",
      path: `/blog`,
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
