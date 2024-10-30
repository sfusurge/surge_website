import StormHacksImage from "/public/stormhacks.png";
import JourneyHacksImage from "/public/journeyhacks.png";
import WorkshopsImage from "/public/workshops.png";
import Image from "next/image";
import HomeCard from "@/components/HomeCard";

import text_content from "@/lib/content/text_content.json";

const TitleSection = () => {
  return (
    <>
      <section className="flex flex-col gap-4 mt-24">
        <h6 className="text-caption text-center">
          {text_content.homepage.events.callout}
        </h6>
        <h2 className="text-center title-3 text-balance max-w-3xl mx-auto">
          {text_content.homepage.events.heading}
        </h2>
      </section>
    </>
  );
};

const EventSection = () => {
  return (
    <>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

          <HomeCard
            title="StormHacks"
            description="Our flagship hackathon"
            src= {StormHacksImage}
            className="bg-[#2d1367]"
            url="https://stormhacks.com/"
          />
          <HomeCard
            title="JourneyHacks"
            description="Our beginner-friendly hackathon"
            src={JourneyHacksImage}
            className="bg-[#32269F]"
            url="https://journeyhacks2024.devpost.com/"
          />
          <HomeCard
            title="Workshops"
            description="Learn new skills"
            src={WorkshopsImage}
            className="bg-[#1E293B]"
            url="/events"
          />
        </div>
    </>
  );
};

/*
const SurgeEvent = ({ heading, subheading, image, description }) => {
  return (
    <>
      <div
        className="bg-surface flex flex-row lg:flex-col items-center
                flex-[1_0_0]
               pb-0 gap-8
                rounded-custom-radius w-full hover:scale-105 transition-transform"
      >
        <section className="gap-custom-gap w-1/2 lg:w-full px-10 pt-10">
          <h2 className="title-2 emphasized mb-2">{heading}</h2>
          <h2 className="paragraph-lg text-text-primary">{subheading}</h2>
        </section>
        <Image
          alt={description}
          src={image}
          className="w-1/2 lg:w-full aspect-square object-top object-cover rounded-bl-custom-radius rounded-br-custom-radius"
        />
      </div>
    </>
  );
};
*/

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

const InfoItem = ({ stat, description }) => {
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
