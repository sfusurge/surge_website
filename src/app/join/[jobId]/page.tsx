import jobs from "@/lib/jobListing.json"; // Assuming your jobs.json file is here
import { Metadata } from "next";

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
    title: `${job?.team + " " + job?.title}`,
    description: "job",
  };
}

export default function JobPage({ params: { jobId } }: JobPageProps) {
  const job = jobs.find((job) => job.url === jobId);

  return (
    <main className="flex gap-12 xl:gap-48 flex-col md:flex-row w-full justify-center">
      <div className="flex flex-col gap-5  ">
        <h1 className="large-title emphasized">{job?.title}</h1>
        <div className=" flex flex-col gap-2">
          <span className="text-base text-text-secondary font-medium flex gap-2">
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
            {job?.team}
          </span>
          <span className="text-base text-text-secondary font-medium flex gap-2 items-center">
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
          <span className="text-base text-text-secondary font-medium flex gap-2">
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
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>

            {`Director of ${job?.team}: ${job?.director}`}
          </span>
        </div>

        <a href={`${job?.listing}`} className=" button-link primary md w-full md:w-fit items-center justify-center ">
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
            {job?.resonsibilities.map((responsibility, index) => (
              <li className="text-lg leading-8" key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="title-2 mb-4">Skills</h2>
          <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
            {job?.skills.map((responsibility, index) => (
              <li className="text-lg leading-8" key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="title-2 mb-4">Commitement</h2>
          <ul className="paragraph flex flex-col gap-2 text-text-secondary list-disc list-outside px-5">
            {job?.commitment.map((responsibility, index) => (
              <li className="text-lg leading-8" key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
