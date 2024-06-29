import { skills, softskills } from "@/utils/data";
import { BsCheck2All } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="w-full flex flex-col py-20 px-0 lg:px-5 2xl:px-32 lg:py-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c]">
      <h4 className="text-3xl font-bold text-white mb-10 text-center">
        Technical Skills
      </h4>

      <div className="w-full flex flex-wrap gap-10 items-center justify-center">
        {skills.map((skill, index) => (
          <div
            data-aos="zoom-in-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            key={index}
            className="flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] rounded-full items-center hover:animate-bounce ease-in-out duration-300"
          >
            <div className="w-10 h-10">
              <img src={skill.icon} className="w-full h-full rounded-full" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-md font-semibold text-white ">
                  {skill.name}
                </p>
                <p className="text-md font-semibold text-white">
                  {skill.value + "%"}
                </p>
              </div>
              <div className="w-[200px] h-[10px] bg-slate-800 rounded-lg mb-1">
                <div
                  className="bg-neutral-300 h-full"
                  style={{ width: skill.value + "%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 ">
        <h4 className="text-3xl font-bold text-white mb-14 text-center">
          Soft Skills
        </h4>

        <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
          <div className="flex flex-col bg-[#224cff10] p-6 rounded-xl shadow-xl hover:scale-125 ease-in-out duration-500 mb-10 md:mb-0">
            {softskills.slice(0, 5).map((s, index) => (
              <div key={index + s} className="flex items-center gap-3 p-4">
                <BsCheck2All color="white" size={22} />
                <p className="text-white">{s}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col bg-[#224cff10] p-6 rounded-xl shadow-xl scale-110 hover:scale-125 ease-in-out duration-500 mb-10 md:mb-0">
            {softskills.slice(5, 10).map((s, index) => (
              <div key={index + s} className="flex items-center gap-3 p-4">
                <BsCheck2All color="white" size={22} />
                <p className="text-white">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
