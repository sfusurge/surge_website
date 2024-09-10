import StormHacksImage from "/public/stormhacks.png";
import JourneyHacksImage from "/public/journeyhacks.png";
import WorkshopsImage from "/public/workshops.png";
import Image from "next/image";

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
      <section
        className="flex mt-8 mb-24
                items-center justify-center gap-6
           flex-col lg:flex-row"
      >
        {/* <SurgeEvent
          heading={"StormHacks"}
          subheading={"Our beginner-friendly hackathon"}
          image={StormHacksImage}
          description={"StormHacks"}
        /> */}

        {/* <div className="bg-[#2A1B34] lg:w-1/3 rounded-2xl hover:scale-105 transition-transform hover:rotate-1 hover:shadow-xl hover:shadow-[#50337A]/30">
          <div className="p-4 md:p-8 pb-0">
          <img src="stormhacks-logo.png" className="h-20 w-auto mx-auto -mb-16 mt-2"></img>
          </div>
          <img src="stormhacks.png" className="w-full aspect-square object-cover object-top"></img>
        </div> */}
        {/* 
        <SurgeEvent
          heading={"StormHacks"}
          subheading={"Our flagship hackathon"}
          image={StormHacksImage}
          description={"JourneyHacks"}
        /> */}

        <div
          className="bg-[#2D1367] flex flex-row lg:flex-col items-center
                flex-[1_0_0]
               pb-0 gap-8
                rounded-custom-radius w-full hover:scale-105 transition-transform"
        >
          <section className="gap-custom-gap w-1/2 lg:w-full px-4 md:px-10 lg:pt-10">
            <h2 className="title-2 emphasized mb-2">StormHacks</h2>
            <h2 className="paragraph-lg text-text-primary">
              Our flagship hackathon
            </h2>
          </section>
          <Image
            src={StormHacksImage}
            className="w-1/2 lg:w-full aspect-square object-top object-cover rounded-bl-custom-radius rounded-br-custom-radius"
          />
        </div>

        <div
          className="bg-[#32279F] flex lg:flex-col flex-col md:flex-row lg:flex-col items-center 
                flex-[1_0_0]
               pb-0 lg:gap-8
                rounded-custom-radius w-full hover:scale-105 transition-transform "
        >
          <section className="gap-custom-gap w-full md:w-1/2 lg:w-full px-5 pt-8 md:px-8 lg:pt-8">
            <h2 className="title-2 emphasized mb-1">JourneyHacks</h2>
            <h2 className="paragraph-lg text-text-primary">
              Our beginner-friendly hackathon
            </h2>
          </section>
          <Image
            src={JourneyHacksImage}
            className="w-full md:w-1/2 lg:w-full aspect-square object-bottom object-cover rounded-bl-custom-radius md:rounded-bl-none rounded-tr-custom-radius lg:rounded-bl-custom-radius rounded-br-custom-radius"
          />
        </div>

        <div
          className="bg-slate-800 flex flex-row lg:flex-col items-center
                flex-[1_0_0]
               pb-0 gap-8
                rounded-custom-radius w-full hover:scale-105 transition-transform"
        >
          <section className="gap-custom-gap w-1/2 lg:w-full px-4 md:px-10 lg:pt-10">
            <h2 className="title-2 emphasized mb-2">Workshops</h2>
            <h2 className="paragraph-lg text-text-primary">Learn new skills</h2>
          </section>
          <Image
            src={WorkshopsImage}
            className="w-1/2 lg:w-full aspect-square object-bottom object-contain lg:object-cover rounded-tr-custom-radius lg:rounded-bl-custom-radius rounded-br-custom-radius"
          />
        </div>
      </section>
    </>
  );
};

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
