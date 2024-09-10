import text_error from "@/lib/content/text_error.json";

export default function JobError() {
  return (
    <div className=" flex w-full  h-[50vh]  items-center justify-center flex-col gap-4 text-center ">
      <h2 className="title-2">{text_error.job_error.error}</h2>
      <p className="paragraph">{text_error.job_error.error_description}</p>
    </div>
  ); // Handle missing job
}
