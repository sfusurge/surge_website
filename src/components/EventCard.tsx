import Link from 'next/link';

type Image = {
    metadata: {
        tags: string[];
        concepts: string[];
    };
    sys: {
        space: {
            sys: Record<string, any>;
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
            sys: Record<string, any>;
        };
        publishedVersion: number;
        revision: number;
        locale: string;
    };
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
            details: Record<string, any>;
            fileName: string;
            contentType: string;
        };
    };
};

type EventCardProps = {
    className?: string,
    title: string,
    time: string,
    location:string,
    id: string;
    image: Image;
  };

  export default function EventCard({
    location,
    title,
    time,
    className,
      id,
      image,
  }: EventCardProps) {
    return (
        <Link href={`/events/${id}`} className={`${className} w-full bg-[#121318] rounded-2xl md:rounded-3xl flex flex-row justify-between p-8 border border-gray-500/0 hover:border-gray-200/10 transition-all duration-300 cursor-pointer`}>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col gap-2">
                    <p className="text-sm md:text-base text-text-secondary font-normal">{time}</p>
                    <h2 className="text-base md:text-xl font-medium">{title}</h2>
                    <div className="text-text-secondary text-sm md:text-base">{location}</div>
                </div>
                <img
                    src={image.fields.file.url}
                    className="ml-4 rounded-lg"
                    alt={title}
                    width="150"
                    height="150"
                />
            </div>
        </Link>
    );
  }
