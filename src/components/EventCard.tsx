import Image from "next/image";
import poo from "/public/event.png";
import { StaticImageData } from "next/image";

type EventCardProps = {
  className?: string;
  title: string;
  time: string;
  date: string;
  src: string;
  location: string;
};
export default function EventCard({
  location,
  title,
  time,
  date,
  src,
  className,
}: EventCardProps) {
  const splitDate = date.split(" ")
  return (
    <div
      className={`${className} w-full group  rounded-2xl overflow-hidden lg:h-[30rem] xl:h-[35rem] md:rounded-3xl flex flex-col justify-between  transition-all duration-300 cursor-pointer relative`}
    >
      <div className="flex flex-col gap-4 p-8 mt-auto">
        <h2 className="title-1 font-medium">{title}</h2>
        <div className="flex flex-row gap-4">
          <div className="rounded-lg flex-col  items-centers ">
            <p className="text-sm text-center uppercase text-white font-normal p-1 bg-brand-primary rounded-t-xl">
              {splitDate[0].slice(0, 3)}
            </p>
            <p className="text-xl text-center  text-white font-normal bg-surface px-5 py-2 rounded-b-xl">
              {splitDate[1]}
            </p>
          </div>

          <div>
            <p className="text-sm font md:text-base text-white font-light ">
              {time}
            </p>
            <p className="text-sm md:text-base text-white font-light ">
              {splitDate[0] + " " + splitDate[1] + ", " + splitDate[2]}
            </p>
            <p className="text-white text-sm md:text-base font-light">
              {location}
            </p>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0 w-screen h-[50%] bg-[linear-gradient(0deg,_rgba(18,19,24,1)_0%,_rgba(18,19,24,0.9)_40%,_rgba(18,19,24,0)_100%)] -z-[9] "></div>
      <div className=" w-screen h-[60%] absolute bottom-0 left-0 bg-black/30  [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_20%,_rgba(255,255,255,0)_100%)] -z-[8]  backdrop-blur-[124px]"></div>

      <Image src={src} alt="" fill className=" group-hover:scale-110 transition-all duration-300 object-cover -z-[10]" />
    </div>
  );
}
