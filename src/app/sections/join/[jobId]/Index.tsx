import jobs from "@/lib/jobListing.json"; // Assuming your jobs.json file is here
import { Metadata } from "next";
import { svgIcons } from "@/lib/teamData";

type Job = {
  url: string;
  team: string;
  title: string;
  description: string;
  director: string;
  about: string;
  responsibilities: string[];
  skills: string[];
  commitment: string[];
  listing: string;
};

type JobPageProps = {
    job?: Job;
};


export default function JobPage({ job }: JobPageProps) {
  const pagejob = jobs.find((role) => role.url === job?.url);
  console.log(pagejob?.team)

  return (
    <main className="flex gap-12 xl:gap-48 flex-col md:flex-row w-full justify-center">
      <div className="flex flex-col gap-5 md:sticky md:top-28 h-full">
        <h1 className="large-title emphasized">{pagejob?.title}</h1>
        <div className=" flex flex-col gap-2">
          <span className="text-base text-text-secondary  flex gap-2">
            {pagejob? svgIcons[pagejob.team]:null}
            {pagejob?.team}
          </span>
          <span className="text-base text-text-secondary  flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {pagejob?.description}
          </span>
          <span className="text-base text-text-secondary  flex gap-2">
            {pagejob? svgIcons["Directors"]:null}
            {`Director of ${pagejob?.team}: ${pagejob?.director}`}
          </span>
        </div>

        <a href={`${pagejob?.listing}`} className=" button-link primary md w-full md:w-fit items-center justify-center ">
          Apply Now
        </a>
      </div>
      <div className="flex flex-col gap-12  ">
        <div>
          <h2 className="title-2 mb-4">About this Role</h2>
          <p className="text-text-secondary paragraph">{pagejob?.about}</p>
        </div>
        <div>
          <h2 className="title-2 mb-4">Responsibilities</h2>
          <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
            {pagejob?.responsibilities.map((responsibility, index) => (
              <li className="paragraph leading-8" key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="title-2 mb-4">Skills</h2>
          <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
            {pagejob?.skills.map((responsibility, index) => (
              <li className="paragraph leading-8" key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="title-2 mb-4">Commitement</h2>
          <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
            {pagejob?.commitment.map((responsibility, index) => (
              <li className="paragraph leading-8" key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
