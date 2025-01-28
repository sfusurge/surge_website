import Image from "next/image";
import { StaticImageData } from "next/image";

type CardProps = {
  className?: string;
  title: string;
  description: string;
  src: StaticImageData;
};
export default function ImageCard({
  title,
  description,
  src,
  className,
}: CardProps) {
  return (
    <div
      className={`${className} w-full min-h-[30vh] p-8 lg:p-12  bg-surface rounded-3xl grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-12`}
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
          alt={"hello"}
          className="h-auto w-full  "
          sizes="(max-width: 1023px) 42vw, (max-width: 1439px) 28vw, 416px"
        />
      </div>
    </div>
  );
}
