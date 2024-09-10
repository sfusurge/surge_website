import text_error from "/public/content/text_error";

export default function JobError() {
  return (
    <div className=" flex w-full  h-[50vh]  items-center justify-center flex-col gap-4 text-center ">
      <h2 className="title-2">{text_error.error}</h2>
      <p className="paragraph">{text_error.error_description}</p>
    </div>
  ); // Handle missing job
}
