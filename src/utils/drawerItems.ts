import { DrawerItem } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import ArticleIcon from "@mui/icons-material/Article";

export const drawerItems = (): DrawerItem[] => {
  const defaultMenus = [
    {
      title: "Dashboard",
      path: `/dashboard`,
      icon: DashboardIcon,
    },

    {
      title: "Skills",
      path: `/dashboard/skills`,
      icon: BusinessCenterIcon,
    },

    {
      title: "Educations",
      path: `/dashboard/educations`,
      icon: SchoolIcon,
    },

    {
      title: "Experiences",
      path: `/dashboard/experiences`,
      icon: WorkIcon,
    },

    {
      title: "Projects",
      path: `/dashboard/projects`,
      icon: SplitscreenIcon,
    },

    {
      title: "Blogs",
      path: `/dashboard/blogs`,
      icon: ArticleIcon,
    },

    {
      title: "My Profile",
      path: "/dashboard/profile",
      icon: PersonIcon,
    },
  ];

  return [...defaultMenus];
};
