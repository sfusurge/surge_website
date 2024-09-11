type EventCardProps = {
    className?: string,
    title: string,
    time: string,
    location:string
  };
  export default function EventCard({
    location,
    title,
    time,
    className,
  }: EventCardProps) {
    return (
      <div className={`${className} w-full bg-[#121318] rounded-2xl md:rounded-3xl flex flex-row justify-between p-8 border border-gray-500/0 hover:border-gray-200/10 transition-all duration-300 cursor-pointer`}>
        <div className="flex flex-col gap-2">
        <p className="text-sm md:text-base text-text-secondary font-normal ">{time}</p>
        <h2 className="text-base md:text-xl font-medium">{title}</h2>
        <div className="text-text-secondary text-sm md:text-base">{location}</div>
        </div>

        {/*<div className="aspect-square h-20 md:h-[7.5rem] bg-gray-600 rounded-lg ml-4"></div>*/}
      </div>
    );
  }
  