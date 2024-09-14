import Landing from "@/app/sections/home/Landing";
import Events from "@/app/sections/home/Events";
import Involvement from "@/app/sections/home/Involvement";
import Sponsors from "@/app/sections/home/Sponsors";

export default function Home() {
  return (
    <main>
      <Landing />
      <Events />
      <Sponsors />
      <Involvement />
    </main>
  );
}
