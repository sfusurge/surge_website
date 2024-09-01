import Image from "next/image";
import Landing from "../pages/Landing";
import Card from "../components/Card";
import RoleCard from "../components/RoleCard";

export default function Playground() {
  return (
    <main className="grid grid-cols-4 lg:grid-cols-12  h-full gap-8 overflow-hidden max-w-[1200px] mx-auto">

        <div className="col-span-full flex flex-col md:flex-row gap-8 mx-6">
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
        <div className="col-span-full flex flex-col md:flex-row gap-8 mx-6 ">
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
