import Image from "next/image";

type CardProps = {
  className?: string;
  title: string;
  description: string;
  src: string;
};
export default function Card({
  title,
  description,
  src,
  className,
}: CardProps) {
  return (
    <div
      className={`${className} w-full min-h-[30vh] rounded-3xl grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8 hover:scale-105 transition-all duration-300 overflow-clip`}
    >
      <div className="flex flex-col gap-3 pl-4 xs:pl-6 lg:px-8 lg:pt-8  justify-center lg:justify-start">
      <h2 className=" leading-[140%] text-lg md:text-xl font-medium">{title}</h2>
      <p className="text-[1rem] md:text-base text-text-secondary font-normal max-w-96 ">
        {description}
      </p>
      </div>

      <div className="flex  object-cover ">
        <Image
          src={src}
          width={1659}
          height={1421}
          alt={"hello"}
          objectFit="cover"
          className="lg:h-auto lg:w-full h-full w-auto object-cover  "
        />
      </div>
    </div>
  );
}
