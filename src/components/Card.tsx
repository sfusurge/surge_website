import Image from "next/image";

type CardProps = {
    className?: string,
    title: string,
    description: string,
    src:string
  };
  export default function Card({
    title,
    description,
    src,
    className,
  }: CardProps) {
    return (
      <div className={`${className} w-full bg-[#1b1b1f] rounded-3xl flex flex-col items-center p-4 gap-4  text-center  `}>

        <div className="flex md:justify-center ">
        <Image
        src={"/boo.png"}
        width={1928}
        height={1598}
        alt={"hello"}
        className="object-contain aspect-square max-w-48 md:max-w-full "
       />
        </div>
  
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-base text-text-secondary font-normal max-w-96 ">{description}</p>
      </div>
    );
  }