import Link from 'next/link';
import Image from "next/image";

type EventCardProps = {
    className?: string,
    title: string,
    time: string,
    location:string,
    id: string;
    imageUrl: string;
};

  export default function EventCard({
    location,
    title,
    time,
    className,
    id,
    imageUrl,
  }: EventCardProps) {
    return (
        <Link href={`/events/${id}`} className={`${className} w-full bg-[#121318] rounded-2xl md:rounded-3xl flex flex-row justify-between p-8 border border-gray-500/0 hover:border-gray-200/10 transition-all duration-300 cursor-pointer`}>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col gap-2">
                    <p className="text-sm md:text-base text-text-secondary font-normal">{time}</p>
                    <h2 className="text-base md:text-xl font-medium">{title}</h2>
                    <div className="text-text-secondary text-sm md:text-base">{location}</div>
                </div>
                <Image
                    src={imageUrl}
                    className="ml-4 rounded-lg"
                    alt={title}
                    width={150}
                    height="150"
                />
            </div>
        </Link>
    );
  }
