import StormHacksImage from "/public/images/placehold.png";
import JourneyHacksImage from "/public/images/placehold.png";
import WorkshopsImage from "/public/images/placehold.png";
import Image from "next/image";

const TitleSection = () => {
    return (
        <>
            <section
                className="flex flex-col
                gap-[16px]"
            >
                <h6
                    className="text-brand-primary text-center
                    font-mono text-[14px] font-semibold uppercase">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    WHAT'S SFU SURGE?
                </h6>
                <h1
                    className="text-white text-center
                    font-geist text-[40px] font-medium">
                    We do cool events or something idk
                </h1>
            </section>
        </>
    );
};

const EventSection = () => {
    return (
        <>
            <section
                className="mt-[40px] mb-[100px]
                flex flex-row items-center justify-center
                gap-[40px]"
            >
                <SurgeEvent
                heading={'StormHacks'}
                subheading={'Our beginner-friendly hackathon'}
                image={StormHacksImage}
                description={"StormHacks"}
                />
                <SurgeEvent
                    heading={'JourneyHacks'}
                    subheading={'Our beginner-friendly hackathon'}
                    image={JourneyHacksImage}
                    description={"JourneyHacks"}
                />
                <SurgeEvent
                    heading={'Workshops'}
                    subheading={'Learn new skills'}
                    image={WorkshopsImage}
                    description={"Workshops"}
                />
            </section>
        </>
    );
};

const SurgeEvent = ({heading, subheading, image, description}) => {
    return (
        <>
            <border
                className= "bg-surface flex flex-col
                gap-[32px]
                flex-[1_0_0]
                pt-[40px] pb-0 pl-[40px] pr-[44.2px]
                rounded-custom-radius
                font-geist text-white not-italic"
            >
                <section
                    className="gap-custom-gap"
                >
                    <h1
                        className="text-[40px] text-left font-medium leading-[50px] tracking-[-0.6px]"
                    >
                        {heading}
                    </h1>
                    <h2
                        className="text-[20px] font-normal leading-[30px]"
                    >
                        {subheading}
                    </h2>
                </section>
                <Image
                    src={image}
                    alt={description}
                    layout="fill"
                    className="!relative"
                />
            </border>
        </>
    )
}

const InfoSection = () => {
    return (
        <section className="my-[100px]
        px-[80px]
        flex flex-row items-center justify-center
        gap-[20px]"
        >
            <InfoItem
                stat={'2,543'}
                description={'total hackers'}
            />
            <InfoItem
                stat={'134'}
                description={'projects submitted'}
            />
            <InfoItem
                stat={'$12,000'}
                description={'awarded in prizes'}
            />
            <InfoItem
                stat={'300'}
                description={'participants'}
            />
        </section>
    );
};

const InfoItem = ({stat, description}) => {
    return (
        <section className="flex flex-col items-center justify-center
        flex-[1_0_0]
        gap-custom-gap
        text-white font-geist not-italic font-medium"
        >
            <stat className="text-[52px] leading-[58.5px] tracking-[-0.91px]">
                {stat}
            </stat>
            <h2 className="text-[25px] leading-[31.25px] tracking-[-0.312px]">
                {description}
            </h2>
        </section>
    );
};

const Events = () => {
    return (
        <>
            <section className="mx-[100px]
            font-feature-settings
            pt-[40px] pb-[20px]"
            >
                <TitleSection />
                <EventSection />
                <InfoSection />
            </section>
        </>
    );
};

export default Events;
