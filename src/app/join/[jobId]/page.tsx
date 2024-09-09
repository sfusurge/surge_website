import jobs from "@/lib/jobListing.json"; // Assuming your jobs.json file is here
import { Metadata } from "next";
import JoinTeam from "@/app/sections/join/[jobId]";

type JobPageProps = {
  params: {
    jobId: string;
  };
};

export function generateMetadata({
  params: { jobId },
}: JobPageProps): Metadata {
  const job = jobs.find((job) => job.url === jobId);
  return {
    title: `${job?job.team + " " + job.title: "Job not found "}`,
    description: "job",
  };
}

export default function JobPage({ params: { jobId } }: JobPageProps) {
  const job = jobs.find((role) => role.url === jobId);

  if (!job) {
    return <div className=" flex w-full  h-[50vh]  items-center justify-center flex-col gap-4 text-center ">
      <h2 className="title-2">This job doesn't seem to exist</h2>
      <p className="paragraph">Oops! It looks like the job you're looking for either no longer exists or the link you followed may be incorrect. Please check the URL or explore our current job listings.</p>
      </div>; // Handle missing job
  }
  return (
    <JoinTeam job={job} />
  );
}
