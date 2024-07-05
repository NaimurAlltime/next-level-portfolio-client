import Image from "next/image";

const Tool = ({ tool }: any) => {
  return (
    <>
      <div className="flex gap-5 md:gap-7 items-center bg-white rounded-md shadow-lg px-5 py-1 ">
        <Image
          width={500}
          height={500}
          alt="tools icon"
          src={tool.icon}
          className="w-10 h-10"
        />
        <p className=" text-black text-md">{tool.name}</p>
      </div>
    </>
  );
};

export default Tool;
