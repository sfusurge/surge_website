import { JobListingDTO } from "@/lib/content/types/JobListing";
import { Metadata } from "next";
import { svgIcons } from "@/lib/teamData";
import JobError from "@/app/sections/join/JobError";
import { getJobListingsCollection } from "@/lib/content/contentfulQueries";

type JobListingPageProps = {
  params: { jobId: string };
};

// export function generateMetadata({ params }: JobListingPageProps): Metadata {
//   return {
//     title: `${job ? job.team + " " + job.title : "Job not found "}`,
//     description: "job",
//   };
// }

export default async function JobListingPage({ params }: JobListingPageProps) {
  const jobId = Number(params.jobId);
  const job = await getJobListingsCollection().then((data) =>
    data.find((job) => job.id === jobId)
  );
  return (
    <>
      {job ? (
        <main className="flex gap-12 xl:gap-48 flex-col md:flex-row w-full justify-center">
          <div className="flex flex-col gap-5 md:sticky md:top-28 h-full">
            <h1 className="large-title emphasized">{job?.title}</h1>
            <div className=" flex flex-col gap-2">
              <span className="text-base text-text-secondary  flex gap-2">
                {job ? svgIcons[job.team] : null}
                {job?.team}
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
                {job?.description}
              </span>
              <span className="text-base text-text-secondary  flex gap-2">
                {job ? svgIcons["Directors"] : null}
                {`Director of ${job?.team}: ${job?.director}`}
              </span>
            </div>

            <a
              href={`${job?.listing}`}
              className=" button-link primary md w-full md:w-fit items-center justify-center "
            >
              Apply Now
            </a>
          </div>
          <div className="flex flex-col gap-12  ">
            <div>
              <h2 className="title-2 mb-4">About this Role</h2>
              <p className="text-text-secondary paragraph">{job?.about}</p>
            </div>
            <div>
              <h2 className="title-2 mb-4">Responsibilities</h2>
              <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
                {job?.responsibilities.map((responsibility, index) => (
                  <li className="paragraph leading-8" key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="title-2 mb-4">Skills</h2>
              <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
                {job?.skills.map((responsibility, index) => (
                  <li className="paragraph leading-8" key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="title-2 mb-4">Commitment</h2>
              <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
                {job?.commitment.map((responsibility, index) => (
                  <li className="paragraph leading-8" key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      ) : (
        <JobError />
      )}
    </>
  );
}
