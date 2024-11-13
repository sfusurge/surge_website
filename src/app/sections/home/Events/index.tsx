import StormHacksImage from "/public/stormhacks.png";
import JourneyHacksImage from "/public/journeyhacks.png";
import WorkshopsImage from "/public/workshops.png";
import Image from "next/image";

import {  HomeCardProps, HomeCard} from "@/components/HomeCard/HomeCard"
import text_content from "@/lib/content/text_content.json";

const TitleSection = () => {
  return (

    <section className="flex flex-col gap-4 mt-24">
      <h6 className="text-caption text-center">
        {text_content.homepage.events.callout}
      </h6>
      <h2 className="text-center title-3 text-balance max-w-3xl mx-auto">
        {text_content.homepage.events.heading}
      </h2>
    </section>

  );
};

const EventSection = () => {
  const events: HomeCardProps[] = [
    {
      title:"StormHacks",
      description: "Our flagship hackathon",
      src:StormHacksImage.src,
      url:"https://stormhacks.com/",
    },
    {
      title:"JourneyHacks",
      description: "Our beginner-friendly hackathon",
      src:JourneyHacksImage.src,
      url:"https://journeyhacks2024.devpost.com/"
    },
    {
      title:"Workshops",
      description:"Learn new skills",
      src: WorkshopsImage.src,
      url: "https://journeyhacks2024.devpost.com/"

    }
  ]
  return (

    <div style={{
      width:"calc(100% - 4rem)",
      display:"flex",
      justifyContent:"center",
      flexFlow:"wrap",
      alignItems:"center",
      margin:"2rem",
      gap:"32px"
    }}>
      {events.map((item)=><HomeCard key={item.title} {...item}/>)}
    </div>

  );
};


const InfoSection = () => {
  return (
    <section
      className="flex my-32 px-20
        min-[1230px]:gap-5 max-[1230px]:gap-16
        min-[1230px]:flex-row max-[1230px]:flex-col
        items-center justify-center"
    >
      <InfoItem stat={"800+"} description={"applicants"} />
      <InfoItem stat={"300+"} description={"total hackers"} />
      <InfoItem stat={"$12,520"} description={"awarded in prizes"} />
      <InfoItem stat={"700"} description={"diverse projects"} />
    </section>
  );
};

const InfoItem = ({ stat, description } : {stat:string, description:string}) => {
  return (
    <section
      className="flex flex-col items-center justify-center
        flex-[1_0_0]
        gap-custom-gap
        text-white font-GeistSans not-italic font-medium"
    >
      <h1 className="large-title mb-1 emphasized tracking-tight">{stat}</h1>
      <h4 className="text-lg medium text-center">{description}</h4>
    </section>
  );
};

const Events = () => {
  return (
    <>
      <TitleSection />
      <EventSection />
      <InfoSection />
    </>
  );
};

export default Events;
