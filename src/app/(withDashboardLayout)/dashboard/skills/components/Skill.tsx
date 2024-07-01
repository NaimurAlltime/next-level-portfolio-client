import { ISkill } from "@/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Skill = ({ skill }: { skill: ISkill }) => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] rounded-full items-center hover:animate-bounce ease-in-out duration-300"
    >
      <div className="w-10 h-10">
        <img src={skill.icon} className="w-full h-full rounded-full" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p className="text-md font-semibold text-white ">{skill.name}</p>
          <p className="text-md font-semibold text-white">
            {skill.percentage + "%"}
          </p>
        </div>
        <div className="w-[120px] h-[6px] bg-slate-800 rounded-lg mb-1">
          <div
            className="bg-neutral-300 h-full"
            style={{ width: skill.percentage + "%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
