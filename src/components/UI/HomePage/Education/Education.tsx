"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

import { IEducation } from "@/types";
import dateFormatter from "@/utils/dateFormatter";
import { useGetAllEducationQuery } from "@/redux/api/education.api";

const Education = () => {
  const { data } = useGetAllEducationQuery(undefined);

  return (
    <div
      className="timeline py-14 px-2 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]"
      style={{ width: "100%" }}
    >
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
          Education
        </h2>
        <hr className="text-white border-b-2 mt-2 w-16 mx-auto"></hr>
      </div>
      <VerticalTimeline animate={true}>
        {data?.data.map((education: IEducation) => (
          <VerticalTimelineElement
            key={education._id}
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#142850",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #142850",
            }}
            date={dateFormatter(education.startDate, education.endDate)}
            iconStyle={{ background: "#142850", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">
              {education.certificate}
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              {education.institute}
            </h6>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
