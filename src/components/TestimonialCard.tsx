import Image from "next/image";

type TestimonialCardProps = {
  className?: string;
  name: string;
  position: string;
  testimonial: string;
  cardStyle: string;
  imageLink: string;
};
export default function TestimonialCard({
  className,
  name,
  position,
  testimonial,
  cardStyle, imageLink,
}: TestimonialCardProps) {
  if (cardStyle === "small") {
    return (
      <div
        className={`${className} w-full h-full bg-overlay gap-6 rounded-xl flex flex-col whitespace-pre-wrap p-6`}
      >
        <p className="text-base leading-[150%] font-normal mt-auto text-text-secondary">“{testimonial}”</p>
        <div className="flex flex-row gap-4 mt-auto items-center">
        <Image
            src={imageLink}
            alt={`${name}'s profile picture`}
            className="rounded-full"
            width={40} 
            height={40} 
          />
          <div className="flex flex-col">
            <h2>{name}</h2>
            <h3 className="text-text-secondary text-sm">{position}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`${className} w-full h-full bg-overlay gap-6 rounded-xl flex flex-col xl:flex-col whitespace-pre-wrap p-6`}
      >
        <p className="text-text-primary text-center tracking-tight mt-4 lg:my-auto  xl:text-left font-medium text-xl">“{testimonial}”</p>
        <div className="flex justify-center xl:justify-normal items-center xl:flex-row gap-4">
          <Image
              src={imageLink}
              alt={`${name}'s profile picture`}
              className="rounded-full"
              width={40} 
              height={40} 
            />
          <div className="flex flex-col">
            <h2>{name}</h2>
            <h3 className="text-text-secondary text-sm">{position}</h3>
          </div>
        </div>
      </div>
    );
  }
}
