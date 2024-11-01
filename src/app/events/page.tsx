import EventsHero from "../sections/events/EventsHero";
import JoinDiscord from "@/components/JoinDiscord";
import CurrentEvents from "../sections/events/CurrentEvents";

export default async function Page() {
  return (
    <main className="flex flex-col gap-36">
      <EventsHero />
      <CurrentEvents />
      <JoinDiscord />
    </main>
  );
}
