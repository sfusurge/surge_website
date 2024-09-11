import Image from "next/image";

type InfoItemProps = {
    className?: string,
    stat: string,
    description: string,

  };
  export default function InfoItem({
    stat,
    description,

    className,
  }: InfoItemProps) {
    return (
        <section
        className="flex flex-col items-center justify-center
          flex-[1_0_0]
          gap-custom-gap
          text-white font-GeistSans not-italic font-medium"
      >
        <h1 className="large-title emphasized leading-10 tracking-tight">
          {stat}
        </h1>
        <h4 className="title-3 emphasized leading-8 tracking-tight text-center">
          {description}
        </h4>
      </section>
    );
  }