const Tool = ({ tool }: any) => {
  return (
    <>
      <div className="flex gap-5 md:gap-7 items-center bg-white rounded-md shadow-lg px-5 py-1 ">
        <img src={tool.icon} className="w-10 h-10" />
        <p className=" text-black text-md">{tool.name}</p>
      </div>
    </>
  );
};

export default Tool;
