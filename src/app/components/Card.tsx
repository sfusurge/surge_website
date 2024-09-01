type CardProps = {
    className?: string,
    title: string,
    description: string,
    children?: React.ReactNode,
    detail: string
  };
  export default function Card({
    children,
    title,
    description,
    className,
    detail
  }: CardProps) {
    return (
      <div className={`${className} w-full bg-overlay rounded-lg flex flex-col items-center text-center p-6 gap-4`}>
        {/* to revise this image  */}
        <div className="aspect-square w-[60%] bg-slate-400 rounded-lg"></div> 
        <h2 className="text-xl">{title}</h2>
        <p className="text-base text-text-secondary">{description}</p>
      </div>
    );
  }
  