import { MouseEventHandler } from "react";
import Image from "next/image";

type TeamCardProps = {
    className?: string,
    name: string,
    title: string,
    description: string,
    // picture temporary for now
    url:string 
    buttonFunction?:()=> void
  };
  export default function TeamCard({
    name,
    title,
    description,
    url,
    className,
    buttonFunction,
  }: TeamCardProps) {
    return (
      <div className={` w-full  bg-[#1B1D21]/60  p-3 flex flex-col md:flex-row gap-6 rounded-lg ${className}`}>
      <div className="aspect-square w-[5rem] rounded-full md:rounded-lg md:w-auto md:h-[12.5rem] overflow-hidden">
        <Image
        src={url}
        width={500}
        height={500}
        alt="hello"
        />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <h1 className="title-3 font-base">{name}</h1>
        <h2 className="text-base font-light text-text-secondary">{title}</h2>
        <p className="text-base font-light text-text-secondary">
          {description}
        </p>
        <div className="flex gap-2 mt-auto py-2">
          <a href="" >socials</a>
          <a href="" >socials</a>
          <a href="" >socials</a>
        </div>
      </div>
    </div>
    );
  }
  