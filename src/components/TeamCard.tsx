"use client"
import { useState } from "react";
import Image from "next/image";

type TeamCardProps = {
    className?: string,
    name: string,
    major: string,
    role: string,
    // picture temporary for now
    src:string ,
    fallbackSrc:string,
    buttonFunction?:()=> void
  };
  export default function TeamCard({
    name,
    major,
    role,
    src,
    fallbackSrc,
    className,
    buttonFunction,
  }: TeamCardProps) {

    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
      setImgSrc(fallbackSrc);
    };

    return (
      <div className={` w-full  bg-[#1B1D21]/60  p-3 flex flex-col md:flex-row gap-6 rounded-lg ${className}`}>
      <div className="aspect-square w-[5rem] rounded-full md:rounded-lg md:w-auto md:h-[8rem] overflow-hidden">
        <Image onError={handleError}
        src={imgSrc}
        width={500}
        height={500}
        alt="Portait of SFU Surge team member"
        loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <span className="title-3 font-base">{name}</span>
        <span className="text-base font-light text-text-secondary">{major}</span>
        <p className="text-base font-light text-text-secondary">
          {role}
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
  