

import jobs from '@/lib/jobListing.json'; // Assuming your jobs.json file is here
import { Metadata } from 'next';

type JobPageProps = {
  params:{
    jobId: string;
  }

};



export function generateMetadata({params: {jobId}}: JobPageProps):Metadata {
  const job = jobs.find(job => job.url === jobId)
  return {
    title: `${job?.team +" "+ job?.title}`,
    description: "job"
  }
};

export default function JobPage({params: {jobId}}: JobPageProps) {


   const job = jobs.find(job => job.url === jobId)

   
   console.log(job)
  
    return (
      <main>
        <h1>{job?.title}</h1>
        <h4>Requirements:</h4>

      </main>
    );
}
