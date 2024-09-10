import EventsHero from "@/app/sections/events/EventsHero";
import CurrentEvents from "@/app/sections/events/CurrentEvents";

export default function Page() {
  return (
    <main className="flex flex-col gap-36">
      <EventsHero/>
      <CurrentEvents />
    </main>
  );
}
