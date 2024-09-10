type TestimonialCardProps = {
    className?: string,
    name:string,
    position: string,
    testimonial: string

  };
  export default function TestimonialCard({
    className,
    name,
    position,
    testimonial
  }: TestimonialCardProps) {
    return (
      <div className={`${className} w-full h-full bg-[#121318] rounded-2xl md:rounded-3xl flex flex-col justify-between p-8 border border-gray-500/0 hover:border-gray-200/10 transition-all duration-300 cursor-pointer`}>
        <h2>{name}</h2>
        <h3>{position}</h3>
        <p>{testimonial}</p>
      </div>
    );
  }
  