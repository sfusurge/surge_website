import EventCard from "@/components/EventCard";
import eventData from "@/lib/eventsData.json";

export default function CurrentEvents() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {eventData.map((thisEvent, index) => {
        return (
          <EventCard
            key={index}
            title={thisEvent.title}
            date={thisEvent.date}
            time={thisEvent.time}
            location={thisEvent.location}
            src={thisEvent.src}
          />
        );
      })}
    </section>
  );
}
