import EventError from "../EventError";
import { getEventCollection } from "@/lib/content/contentfulQueries";
import { Metadata } from "next";

type EventListingPageProps = {
    params: { eventId: string };
};

export async function generateMetadata({ params }: EventListingPageProps): Promise<Metadata> {
    const eventId = Number(params.eventId);
    const event = await getEventCollection().then((data) =>
        data.find((event) => event.id === eventId)
    );
    return {
        title: `${event ? event.title : "Event not found"}`,
        description: "Event",
    };
}

export default async function EventListingPage({ params }: EventListingPageProps) {
    const eventId = Number(params.eventId);
    const event = await getEventCollection().then((data) =>
        data.find((event) => event.id === eventId)
    );
    return (
        <>
            {event ? (
                <main className="flex gap-12 xl:gap-48 flex-col md:flex-row w-full justify-center">
                    <div className="flex flex-col gap-5 md:sticky md:top-28 h-full">
                        {event.title && <h1 className="large-title emphasized">{event.title}</h1>}
                        <div className="flex flex-col gap-2">
                            {event.time && (
                                <span className="text-base text-text-secondary flex gap-2 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                    {event.time}
                                </span>
                            )}
                        </div>

                        {event.application_link && (
                            <a
                                href={`${event.application_link}`}
                                className="button-link primary md w-full md:w-fit items-center justify-center"
                            >
                                Apply Now
                            </a>
                        )}
                    </div>
                    <div className="flex flex-col gap-12">
                        {event.about && (
                            <div>
                                <h2 className="title-2 mb-4">About this Event</h2>
                                <p className="text-text-secondary paragraph">{event.about}</p>
                            </div>
                        )}
                        {event.responsibilities && (
                            <div>
                                <h2 className="title-2 mb-4">Responsibilities</h2>
                                <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
                                    {event.responsibilities.map((responsibility, index) => (
                                        <li className="paragraph leading-8" key={index}>
                                            {responsibility}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {event.skills && (
                            <div>
                                <h2 className="title-2 mb-4">Skills</h2>
                                <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
                                    {event.skills.map((skill, index) => (
                                        <li className="paragraph leading-8" key={index}>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {event.commitment && (
                            <div>
                                <h2 className="title-2 mb-4">Commitment</h2>
                                <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
                                    {event.commitment.map((commitment, index) => (
                                        <li className="paragraph leading-8" key={index}>
                                            {commitment}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </main>
            ) : (
                <EventError />
            )}
        </>
    );
}
