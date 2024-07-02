import { USER_ROLE } from "@/contants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface ISkill {
  _id: string;
  name: string;
  percentage?: string;
  icon: string;
}

export interface IEducation {
  _id: string;
  institute: string;
  certificate: string;
  startDate: Date;
  endDate: Date;
}

export interface IExperience {
  _id: string;
  title: string;
  organization: string;
  link: string;
  responsibilities: string[];
  startDate: Date;
  endDate: Date;
}

export interface IProject {
  _id: string;
  name: string;
  description: string;
  category: IProjectCategory;
  featured: boolean;
  features: string[];
  technologies: ISkill[];
  cover: string;
  repositoryLink: {
    source_code: string;
    client_side_code: string;
    server_side_code: string;
  };
  liveSiteLink: string;
}

export type IProjectCategory = "Frontend" | "Backend" | "Full-stack";

export interface IBlog {
  _id: string;
  title: string;
  text: string;
  cover: string;
  createdAt: Date;
  updatedAt: Date;
}
