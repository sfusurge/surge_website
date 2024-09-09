import jobs from "@/lib/jobListing.json"; // Assuming your jobs.json file is here
import { Metadata } from "next";
import JoinTeam from "@/app/sections/join/[jobId]";
import JobError from "@/app/sections/join/JobError";

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
    return <JobError/>
  }
  return (
    <JoinTeam job={job} />
  );
}
