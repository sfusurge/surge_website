import StormHacksImage from "/public/placeholder.jpg";
import JourneyHacksImage from "/public/placeholder.jpg";
import WorkshopsImage from "/public/placeholder.jpg";
import Image from "next/image";

const TitleSection = () => {
    return (
        <>
            <section
                className="flex flex-col gap-4">
                <h6
                    className="font-GeistMono text-brand-primary text-center
                    text-s font-semibold">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    WHAT'S SFU SURGE?
                </h6>
                <h2
                    className="text-center title-1 emphasized">
                    We do cool events or something idk
                </h2>
            </section>
        </>
    );
};

const EventSection = () => {
    return (
        <>
            <section
                className="flex mt-10 mb-24
                min-[1230px]:flex-row max-[1230px]:flex-col
                items-center justify-center
                min-[1230px]:gap-10 max-[1230px]:gap-5"
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
                className="bg-surface flex flex-col
                flex-[1_0_0]
                pt-10 pb-0 pl-10 pr-11 gap-8
                rounded-custom-radius"
            >
                <section
                    className="gap-custom-gap">
                    <h2
                        className="text-left title-1 emphasized leading-10 tracking-tight">
                        {heading}
                    </h2>
                    <h2
                        className="text-base leading-10">
                        {subheading}
                    </h2>
                </section>
                <Image
                    alt={description}
                    src={image}
                    style={{ width: "100%", height: "auto" }}
                />
            </border>
        </>
    )
}

const InfoSection = () => {
    return (
        <section className="flex my-24 px-20
        min-[1230px]:gap-5 max-[1230px]:gap-16
        min-[1230px]:flex-row max-[1230px]:flex-col
        items-center justify-center"
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
