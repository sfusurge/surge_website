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
      className={`${className} w-full min-h-[30vh] p-8 lg:p-12  bg-surface rounded-3xl grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-12 hover:scale-105 transition-all duration-300 `}
    >
      <div className="flex flex-col gap-3   justify-center lg:justify-start">
      <h2 className=" leading-[140%] text-lg md:text-xl font-medium">{title}</h2>
      <p className="text-[1rem] md:text-base text-text-secondary font-normal max-w-96 ">
        {description}
      </p>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src={src}
          width={1659}
          height={1421}
          alt={"hello"}
          className="h-auto w-full  "
        />
      </div>
    </div>
  );
}
