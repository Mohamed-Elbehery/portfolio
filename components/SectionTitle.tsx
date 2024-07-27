const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className="w-fit relative text-4xl font-bold after:absolute after:left-0 after:-bottom-6 after:w-1/3 after:bg-[#FFCC66] after:h-1.5 after:rounded-full">
      {title}
    </h1>
  );
};

export default SectionTitle;
