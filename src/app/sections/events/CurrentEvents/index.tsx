import EventCard from "@/components/EventCard";
import { fetchEventCollection } from "@/lib/content/contentfulQueries";

// revise the type declarations -- using any might not be best practice
// people -- socials

// types in the code -- type safety
// finish CMS and work on other content models

export default async function CurrentEvents() {
  let eventData = await fetchEventCollection();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {eventData.map((event: any, index: any) => {
        const { title, time, location } = event;
        return (
          <EventCard
            key={index}
            title={title}
            time={time}
            location={location}
          />
        );
      })}
    </section>
  );
}
