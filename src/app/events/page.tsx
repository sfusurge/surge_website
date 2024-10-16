import EventsHero from "../sections/events/EventsHero";
import JoinDiscord from "@/components/JoinDiscord";
import CurrentEvents from "../sections/events/CurrentEvents";
import {
  fetchEventCollection,
  fetchJobListingCollection,
  fetchSpace,
} from "@/lib/content/contentfulConnector";

export default async function Page() {
  return (
    <main className="flex flex-col gap-36">
      <EventsHero />
      <CurrentEvents />
      <JoinDiscord />
    </main>
  );
}
