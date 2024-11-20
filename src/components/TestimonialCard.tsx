export interface TestimonialCardProps {
  className?: string;
  name: string;
  testimonial: string;
  src: string;
  position: string;
};
export default function TestimonialCard({
  className,
  name,
  testimonial,
  src: imageLink,
  position
}: TestimonialCardProps) {
  return (
    <div
      className={`${className} w-full h-full bg-overlay gap-6 rounded-xl flex flex-col whitespace-pre-wrap p-6`}
    >
      <p className="text-base leading-[150%] font-normal mt-auto text-text-secondary">“{testimonial}”</p>
      <div className="flex flex-row gap-4 mt-auto items-center">
        <img src={imageLink} className="rounded-full w-10 h-10"></img>
        <div className="flex flex-col">
          <h2>{name}</h2>
          <h3 className="text-text-secondary text-sm">{position}</h3>
        </div>
      </div>
    </div>
  );
}
