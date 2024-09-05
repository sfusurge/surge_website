import { MouseEventHandler } from "react";

type TeamCardProps = {
    className?: string,
    name: string,
    title: string,
    description: string,
    // picture temporary for now
    picture?:string 
    buttonFunction?:()=> void
  };
  export default function TeamCard({
    name,
    title,
    description,
    picture,
    className,
    buttonFunction,
  }: TeamCardProps) {
    return (
      <div className=" w-full bg-slate-400 p-4 flex flex-col md:flex-row gap-6 rounded-xl">
      <div className="aspect-square w-[5rem] rounded-full md:rounded-xl md:w-auto md:h-[12.5rem] bg-red-200">
        {picture}
      </div>
      <div className="flex flex-col gap-2">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <div className="flex gap-2 mt-auto py-2">
          <a href="" className="bg-slate-500">socials</a>
          <a href="" className="bg-slate-500">socials</a>
          <a href="" className="bg-slate-500">socials</a>
        </div>
      </div>
    </div>
    );
  }
  