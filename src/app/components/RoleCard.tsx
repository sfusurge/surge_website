type RoleCardProps = {
    className?: string,
    title: string,
    description: string,
    team:string
  };
  export default function RoleCard({
    team,
    title,
    description,
    className,
  }: RoleCardProps) {
    return (
      <div className={`${className} w-full bg-[#121318] rounded-3xl flex flex-col p-8 gap-4 border border-gray-500/0 hover:border-gray-200/10 transition-all duration-300 cursor-pointer`}>
        <div className="text-sm font-GeistMono uppercase text-[#60A5FA] font-semibold">{team}</div>
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-base text-text-secondary font-normal ">{description}</p>
        <a className="button-link md bg-gray-600 align ml-auto mt-auto font-normal">Learn more</a>
      </div>
    );
  }
  