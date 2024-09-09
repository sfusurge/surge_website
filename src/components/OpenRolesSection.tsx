"use client";
import jobs from "@/lib/jobListing.json";
import JobCard from "@/components/JobCard";
import { teams } from "@/app/about/teamData";
import { useEffect, useState } from "react";

import JobTeamButton from "./JobTeamButton";

type OpenRolesSectionProps = {
id:string
};

export default function OpenRolesSection({id}:OpenRolesSectionProps) {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  useEffect(() => {
    const selectedTeam = localStorage.getItem("selectedTeam") || "All";
    setActiveButton(selectedTeam);
  },[]);

  const changeTeam = (buttonId: string) => {
    setActiveButton(buttonId);
    localStorage.setItem("selectedTeam", buttonId);
  };

  return (
    <section id={id} className="flex items-center flex-col gap-12">
      <div className=" max-w-xl text-center">
        <span className="text-caption">Open Roles</span>
      <h2 className="title-1">We want you to help us run hackathons and events</h2>

      </div>
     
      <div className=" flex items-center justify-center max-w-3xl gap-2 flex-wrap">
        <JobTeamButton
          buttonFunction={() => changeTeam("All")}
          key={0}
          title="All"
          icon={teams[1].icon}
          isActive={activeButton === "All"}
        />
        {teams.map((team) => {
          return (
            <JobTeamButton
              buttonFunction={() => changeTeam(team.name)}
              key={team.id}
              title={team.name}
              icon={team.icon}
              isActive={activeButton === team.name}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
        {/* check if theres jobs? */}
        {jobs.length !== 0 ? (
          // there is jobs. Does the chosen team (active button) have any roles in the array OR is the active button set to all?
          jobs.some((job) => job.team === activeButton) ||
          activeButton === "All" ? (
            jobs.map((job, index) =>
              // there is a role in the chosen team available. what role is available OR is it the active button thats checked? if first then spit out roles, if second spit out all
              activeButton === job.team || activeButton === "All" ? (
                <JobCard
                  url={`join/${job.url}`}
                  key={index}
                  title={job.title}
                  description={job.about}
                  team={job.team}
                />
              ) : // otherwise dont render anything (applies to other indexes when looping)
              null
            )
          ) : (
            // Otherwise there is no jobs and we're not selected on all
            <div className="col-span-full w-full relative h-56 bg-overlay/80 rounded-2xl flex justify-center items-center">
              <p className=" paragraph text-center text-pretty ">
               {`There are currently no jobs available in ${activeButton}, check back later!`}
              </p>
            </div>
          )
        ) : (
          <div>No jobs available</div> // this handles the case when there are no jobs in the array
        )}
      </div>
    </section>
  );
}
