"use client";
import { useState } from "react";
import RoleButton from "../../components/RoleButton";
import TeamCard from "../../components/TeamCard";
import {teams,} from "./teamData";
import data from "./data.json"

export default function Page() {

  const [activeButton, setActiveButton] = useState<string | null>("President");

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };


  return (
    <main className="flex flex-col gap-40">
      <section className="flex justify-center">
        <div className="flex flex-col items-center max-w-[38rem] text-center">
          <div className="mb-5">About Surge</div>
          <h2 className="mb-6 text-5xl">
            SFU Surge is the place for you if you’re blah blah
          </h2>
          <p className=" text-xl ">
            The organizers of Simon Fraser University’s largest hackathon, SFU
            Surge provides an inclusive space for students to explore their
            passions, connect with industry professionals.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-12 relative">
      {/* <div className="w-full absolute h-36  z-50  top-[-2rem] left-[40%] bg-sunken/20  [mask-image:linear-gradient(180deg,_rgba(0,0,0,1)_20%,_rgba(255,255,255,0)_80%)]  backdrop-blur-[12px] text-xl "> </div> */}
        <div className="w-full lg:w-[40%]">
          <div className=" flex gap-4 flex-col">
            <h2>MEET THE TEAM</h2>
            <h3 className="text-4xl">We’re all super cracked here at Surge</h3>
            <p className="text-xl">
              The organizers of Simon Fraser University’s largest hackathon, SFU
              Surge provides an inclusive space for students to explore...
            </p>
            <div className=" flex flex-row gap-2 flex-wrap ">
              {teams.map((team) => {
                return (
                  <RoleButton
                    buttonFunction={() => handleClick(team.name)}
                    key={team.id}
                    title={team.name}
                    className={`${
                      activeButton === team.name ? "bg-red-300" : "bg-slate-500"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-full lg:w-[60%] h-[40rem] rounded-2xl  overflow-y-scroll relative ">

       
          <div className=" flex flex-col bg-gray-700 rounded-2xl p-4 gap-4 transition-all ">

          {data.map((member) =>
            activeButton === member.team ? (
              <TeamCard
                key={member.id}
                name={member.name}
                title={member.major}
                description={member.position}
              />
            ) : null
          )}
          </div>
         
        </div>
      </section>
    </main>
  );
}
