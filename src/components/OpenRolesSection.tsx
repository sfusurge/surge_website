"use client";
import JobCard from "@/components/JobCard";
import { teams } from "@/lib/teamData";
import { useEffect, useState } from "react";
import { JobListing, JobListingDTO } from "@/lib/content/types/JobListing";

import JobTeamButton from "./JobTeamButton";

type OpenRolesSectionProps = {
  jobs: JobListingDTO[];
};

export default function OpenRolesSection({ jobs }: OpenRolesSectionProps) {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const jobMap = new Map<string, number>();

  jobs.forEach((job) => {
    jobMap.set(job.team, (jobMap.get(job.team) || 0) + 1);
  });

  const totalJobCount = Array.from(jobMap.values()).reduce(
    (total, count) => total + count,
    0
  );

  useEffect(() => {
    const selectedJobTeam = localStorage.getItem("selectedJobTeam") || "All";
    setActiveButton(selectedJobTeam);
  }, []);

  const changeTeam = (buttonId: string) => {
    setActiveButton(buttonId);
    localStorage.setItem("selectedJobTeam", buttonId);
  };

  return (
    <section id="openroles" className="flex items-center flex-col gap-12">
      <div className=" max-w-lg text-center flex flex-col gap-4">
        <span className="text-caption">Open Roles</span>
        <h2 className="title-1 emphasized">
          We want you to help us run hackathons and events
        </h2>
        <p className="paragraph text-pretty">
          SFU Surge is an all-inclusive organization to promote curiosity and
          excitement for a future in technology, while guiding students on their
          paths to career success.
        </p>
      </div>

      <div className=" flex items-center justify-center max-w-3xl gap-2 flex-wrap">
        <JobTeamButton
          buttonFunction={() => changeTeam("All")}
          key={0}
          title="All"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-5"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="m12 12l8-4.5M12 12v9m0-9L4 7.5m8 4.5l8 4.5M12 3v9m0 0l-8 4.5"
              />
            </svg>
          }
          isActive={activeButton === "All"}
        />
        {teams.map((team) => {
          return (
            <JobTeamButton
              buttonFunction={() => changeTeam(team.name)}
              key={team.id}
              title={team.name}
              icon={team.icon}
              count={jobMap.get(team.name)}
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
            <div className="col-span-full w-full relative h-56 flex justify-center items-center">
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
