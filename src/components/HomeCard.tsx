import Image from "next/image";
import { StaticImageData } from "next/image";

type CardProps = {
  className?: string;
  title: string;
  description: string;
  src: StaticImageData;
  url: string;
};
export default function Card({
  title,
  description,
  src,
  className,
  url,
}: CardProps) {
  return (
    <a
      href={url}
      className={`${className} w-full min-h-[30vh] rounded-3xl grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8 hover:scale-105 transition-all duration-300 overflow-hidden`}
    >
      <div className="flex flex-col gap-1.5 pl-4 xs:pl-6 lg:px-8 lg:pt-8  justify-center lg:justify-start">
        <h2 className=" leading-[140%] text-lg md:text-xl font-medium">
          {title}
        </h2>
        <p className="text-[1rem] md:text-base text-text-primary font-normal max-w-96 ">
          {description}
        </p>
      </div>

      <div className="flex  object-cover ">
        <Image
          src={src}
          alt={"hello"}
          objectFit="cover"
          className="lg:h-auto w-full h-full object-cover  "
          sizes="(max-width: 1023px) 42vw, (max-width: 1439px) 28vw, 416px"
        />
      </div>
    </a>
  );
}
