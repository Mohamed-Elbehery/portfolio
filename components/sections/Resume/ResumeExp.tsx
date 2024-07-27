const ResumeExp: React.FC<{title: string; date: string; description: string | JSX.Element}> = ({title, date, description}) => {
  return (
    <div className="space-y-2">
      {/* Headings */}
      <div className="flex items-center gap-x-4">
        {/* Dot */}
        <div className="w-[45px]">
          <div className="mx-auto w-[15px] h-[15px] border-[3px] border-zinc-600 bg-gold rounded-full" />
        </div>
        {/* Name of Experience */}
        <h4 className="font-bold">{title}</h4>
      </div>

      {/* Date */}
      <div className="pl-[61px] space-y-2">
        <h5 className="text-gold text-sm">{date}</h5>

        <p className="text-grey text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ResumeExp