import Image from "next/image";
import Landing from "../sections/Landing"
import Events from "../sections/Events"

export default function Home() {
  return (
    <main>
      <Landing />
      <Events />
    </main>
  );
}
