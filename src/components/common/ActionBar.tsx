"use client";
import { toggleAdminDashboardCollapsed } from "@/redux/features/adminDashboard/adminDashboard.slice";
import { useAppDispatch } from "@/redux/hooks";
import { BiSolidDashboard } from "react-icons/bi";

type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode | JSX.Element;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  const dispatch = useAppDispatch();
  const handleDashboardOpen = () => {
    dispatch(toggleAdminDashboardCollapsed());
  };
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-heading text-primary uppercase">{title}</h1>

        <div className="lg:hidden block">
          <span onClick={handleDashboardOpen} className="flex underline justify-center gap-2 items-center cursor-pointer text-primary">
            <BiSolidDashboard className="text-icon" /> <span>Dashboard</span>
          </span>
        </div>
      </div>
      <div className="my-3 flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default ActionBar;
