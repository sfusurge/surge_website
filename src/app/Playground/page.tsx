import Image from "next/image";
import Landing from "../pages/Landing";
import Card from "../components/Card";
import RoleCard from "../components/RoleCard";
import EventCard from "../components/EventCard";

export default function Playground() {
  return (
    <main className="grid grid-cols-4 lg:grid-cols-12  h-full gap-8 overflow-hidden max-w-[1200px] mx-auto px-8">
      <h2 className=" flex text-4xl font-semibold col-span-full justify-center">
        Event Cards
      </h2>
      <div className="col-span-full flex flex-col md:flex-row gap-8 ">
        <EventCard
        title="Stormhacks 2024"
        location="SFU Burnaby"
        time="10:00am, Oct 12"
         />
                 <EventCard
        title="Beginner friendly figma workshop"
        location="SFU Burnaby"
        time="10:00am, Oct 12"
         />
      </div>

      <h2 className=" flex text-4xl font-semibold col-span-full justify-center">
        Role Cards
      </h2>

      <div className="col-span-full flex flex-col md:flex-row gap-8 ">
        <RoleCard
          team="Design"
          title="User Experience Researcher"
          description="Develop engaging and informative content for newsletters, blogs, and social media to keep our members and followers informed."
          className=""
        />
        <RoleCard
          team="Logsitics"
          title="External Relations Coordinator"
          description="Craft intuitive and engaging user experiences through research and design principles"
          className=""
        />
        <RoleCard
          team="Social Media"
          title="Content Writer"
          description="Build and maintain relationships with industry professionals and partners to enhance club visibility."
          className=""
        />
      </div>
      <div className="col-span-full flex flex-col md:flex-row gap-8  ">
        <RoleCard
          team="Design"
          title="User Experience Researcher"
          description="Develop engaging and informative content for newsletters, blogs, and social media to keep our members and followers informed."
          className=""
        />
        <RoleCard
          team="Logsitics"
          title="External Relations Coordinator"
          description="Craft intuitive and engaging user experiences through research and design principles"
          className=""
        />
        <RoleCard
          team="Social Media"
          title="Content Writer"
          description="Build and maintain relationships with industry professionals and partners to enhance club visibility."
          className=""
        />
      </div>
    </main>
  );
}
