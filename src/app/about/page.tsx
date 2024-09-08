"use client";
import { useEffect, useState } from "react";
import RoleButton from "../../components/RoleButton";
import TeamCard from "../../components/TeamCard";
import { teams } from "./teamData";
import data from "./data.json";
import Testimonials from "@/sections/about/Testimonials";

export default function Page() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const newWidth: number = window.innerWidth;
      const isDesktopValue = newWidth > 1024;
      setIsDesktop(isDesktopValue);
    };

    const newWidth: number = window.innerWidth;
    const isDesktopValue = newWidth > 1024;
    setIsDesktop(isDesktopValue);

    const selectedTeam = localStorage.getItem("selectedTeam") || "Directors";
    setActiveButton(selectedTeam);
    window.innerWidth > 1024 ? setIsDesktop(true) : setIsDesktop(false);

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const changeTeam = (buttonId: string) => {
    setActiveButton(buttonId);
    localStorage.setItem("selectedTeam", buttonId);
    isDesktop!
      ? document
          .getElementById("team")
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      : null;
  };

  return (
    <main className="flex flex-col gap-28">
      <section className="flex justify-center">
        <div className="flex flex-col items-center max-w-[38rem] text-center gap-4">
          <div className=" text-caption">About Surge</div>
          <h1 className="large-title emphasized">
            SFU Surge is the place for you if you’re blah blah
          </h1>
          <p className=" paragraph ">
            The organizers of Simon Fraser University’s largest hackathon, SFU
            Surge provides an inclusive space for students to explore their
            passions, connect with industry professionals.
          </p>
        </div>
      </section>

      <section
        id="team"
        className=" pt-24 flex flex-col lg:flex-row gap-12 relative text-pretty"
      >
        <div className="w-full lg:w-[40%]">
          <div className=" flex gap-8 flex-col lg:sticky top-24 ">
            <h2 className="text-caption">MEET THE TEAM</h2>
            <h3 className="title-1 emphasized">
              We’re all super cracked here at Surge
            </h3>
            <p className="paragraph ">
              The organizers of Simon Fraser University’s largest hackathon, SFU
              Surge provides an inclusive space for students to explore...
            </p>
            <div className=" grid grid-cols-3 xs:grid-cols-4 md:grid-cols-5  lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
              {teams.map((team) => {
                return (
                  <RoleButton
                    buttonFunction={() => changeTeam(team.name)}
                    key={team.id}
                    title={team.name}
                    icon={team.icon}
                    className={`${
                      activeButton === team.name
                        ? "bg-brand-primary/30 text-text-brand-primary "
                        : "bg-gray-800/10 text-text-secondary hover:bg-brand-primary-hover/20"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div
          className=" flex flex-col w-full lg:w-[65%] lg:ml-8 rounded-2xl
       "
        >
          <div className=" flex flex-col  bg-[#121318]/80  p-5 rounded-2xl  gap-5 transition-all ">
            {data.map((member) =>
              activeButton === member.team ? (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  major={member.major}
                  role={member.position}
                  src={member.src}
                  fallbackSrc="/headshots/placeholder.png"
                />
              ) : null
            )}
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
