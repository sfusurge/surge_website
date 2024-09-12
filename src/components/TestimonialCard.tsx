type TestimonialCardProps = {
  className?: string;
  name: string;
  position: string;
  testimonial: string;
  cardStyle: string;
};
export default function TestimonialCard({
  className,
  name,
  position,
  testimonial,
  cardStyle,
}: TestimonialCardProps) {
  if (cardStyle === "small") {
    return (
      <div
        className={`${className} w-full h-full bg-surface gap-4 rounded-2xl md:rounded-3xl flex flex-col  p-8 `}
      >
        <p className="text-base leading-[150%] font-normal mt-auto  text-text-secondary">{testimonial}</p>
        <div className="flex flex-row gap-4 mt-auto">
          <div className=" rounded-full w-10 h-10 bg-slate-600"></div>
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
        className={`${className} w-full h-full bg-[#121318] gap-4 rounded-2xl md:rounded-3xl flex flex-col xl:flex-col  p-8 `}
      >
        <p className="text-text-secondary text-center  xl:text-left font-medium lg text-2xl">{testimonial}</p>
        <div className="flex justify-center xl:justify-normal items-center xl:flex-row gap-4 mt-auto">
          <div className=" rounded-full w-10 h-10 bg-slate-600"></div>
          <div className="flex flex-col">
            <h2>{name}</h2>
            <h3 className="text-text-secondary text-sm">{position}</h3>
          </div>
        </div>
      </div>
    );
  }
}
