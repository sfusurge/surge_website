"use client";

import { useEffect, useState } from "react";
import RoleButton from "@/components/RoleButton";
import TeamCard from "@/components/TeamCard";
import { teams } from "../../../../lib/teamData";
import teamMembers from "@/lib/teamMemberData.json";

export default function TeamGallery() {
  const [activeButton, setActiveButton] = useState<string>(null);
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
  }, [isDesktop]);

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
    <>
      <section className="flex justify-center">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-caption">About Surge</div>
          <h1 className="max-w-[40rem] title-2 emphasized">
            SFU Surge began in May 2019 with a vision of a vibrant, inclusive,
            and community-driven collective for tech enthusiasts at SFU.
          </h1>
          <p className=" paragraph ">
            Co-presidents Hilal Asmat and Jeffrey Leung, driven by their passion
            for hosting ambitious, career-focused events, rallied together to
            form a team dedicated to building, learning, and sharing within the
            tech community. By September 2019, their efforts culminated in the
            official launch of the club, which attracted an impressive 300
            initial members.
          </p>
          <p className="paragraph">
            Since then, we have continued to grow, fostering a space where
            innovation and collaboration thrive.
          </p>
        </div>
      </section>

      <section
        id="team"
        className=" flex flex-col lg:flex-row gap-12 relative text-pretty"
      >
        <div className="w-full lg:w-[40%]">
          <div className=" flex flex-col lg:sticky top-24 ">
            <h2 className="text-caption">MEET THE TEAM</h2>
            <h3 className="title-2 emphasized">
              Introducing the students powering SFU Surge.
            </h3>
            <p className="paragraph ">
              Meet our executive team of SFU students, bringing together diverse
              backgrounds in business, computer science, and design.
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
            {teamMembers.map((member) =>
              activeButton === member.team ? (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  major={member.major}
                  role={member.position}
                  src={member.src}
                  socials={member.socials}
                  fallbackSrc="/headshots/placeholder.png"
                />
              ) : null
            )}
          </div>
        </div>
      </section>
    </>
  );
}
