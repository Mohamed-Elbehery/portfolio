import { IconType } from "react-icons";

const ResumeCategory: React.FC<{
  Icon: IconType;
  title: string;
  children: React.ReactNode;
  showLineProgress?: boolean
}> = ({ Icon, title, children, showLineProgress }) => {
  return (
    <div className="space-y-4 overflow-hidden">
      <div className="flex items-center gap-x-4 z-50 relative">
        <Icon
          size={45}
          className="text-light-gold bg-gradient-to-b from-zinc-800 via-zinc-800 to-gray-700 rounded-full p-1.5 transition"
        />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      <div className="relative">
        <div className="relative z-50 space-y-4">
          {children}
        </div>
        {showLineProgress && <div className="absolute w-[2px] h-full bg-zinc-600 -top-[77px] left-[21.5px]" />}
      </div>
    </div>
  );
};

export default ResumeCategory;