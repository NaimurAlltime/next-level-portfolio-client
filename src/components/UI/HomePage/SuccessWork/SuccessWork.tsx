import { projectStats, tools } from "@/utils/data";
import ProjectStats from "./ProjectStats";
import Tool from "./Tool";

const SuccessWork = () => {
  return (
    <div className="bg-[#061130] py-20">
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-full flex flex-wrap items-center justify-center gap-10 lg:gap-24 pt-10"
      >
        {projectStats.map((ps, idx) => (
          <ProjectStats key={idx} ps={ps}></ProjectStats>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-16"
      >
        {tools.map((tool, idx) => (
          <Tool key={idx} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default SuccessWork;
