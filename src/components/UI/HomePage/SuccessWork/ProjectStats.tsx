const ProjectStats = ({ ps }: any) => {
  return (
    <div className="flex flex-col items-center px-4 py-3 bg-[#0000FF20] rounded-md">
      <p className="text-white text-2xl font-bold">{ps.value}</p>
      <p className="text-white text-sm">{ps.name}</p>
    </div>
  );
};

export default ProjectStats;
