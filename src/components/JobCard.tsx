import Link from "next/link";

type JobCardProps = {
    className?: string,
    title: string,
    description: string,
    url:string
    team:string
  };
  export default function JobCard({
    team,
    title,
    description,
    url,
    className,
  }: JobCardProps) {
    return (
      <Link  href={url} className={`${className} w-full bg-[#151519]/90 rounded-3xl flex flex-col p-8 gap-4 border border-gray-500/0 hover:border-gray-200/10 transition-all duration-300 cursor-pointer`}>
        <div className="text-sm font-GeistMono uppercase text-[#60A5FA] font-semibold">{team}</div>
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-base text-text-secondary font-normal line-clamp-3 text-ellipsis">{description}</p>
        <button  className="button-link secondary md align ml-auto mt-auto font-normal">Learn more</button>
      </Link>
    );
  }