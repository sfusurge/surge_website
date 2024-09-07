import type { Metadata } from "next"
import jobs from "@/lib/jobListing.json"
import Link from "next/link"
import JobCard from "@/components/JobCard"

export const metadata:Metadata = {
  title: "Join SFU Surge",
}


export default function joinTeam() {

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jobs.length != 0?jobs.map((job, index) => 
      
        (
          <JobCard
          url={`join/${job.url}`}
          key={index}
          title={job.title}
          description={job.about}
          team={job.team}/>
         
          
        )
        
        ):
        <div>no Jobs available</div>

        }
      </div>
      
    </main>
  )
}
