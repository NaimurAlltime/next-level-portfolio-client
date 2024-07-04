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
      path: `/`,
      icon: DashboardIcon,
    },

    {
      title: "Skills",
      path: `/skills`,
      icon: BusinessCenterIcon,
    },

    {
      title: "Educations",
      path: `/educations`,
      icon: SchoolIcon,
    },

    {
      title: "Experiences",
      path: `/experiences`,
      icon: WorkIcon,
    },

    {
      title: "Projects",
      path: `/projects`,
      icon: SplitscreenIcon,
    },

    {
      title: "Blogs",
      path: `/blogs`,
      icon: ArticleIcon,
    },

    {
      title: "My Profile",
      path: "/profile",
      icon: PersonIcon,
    },
  ];

  return [...defaultMenus];
};
