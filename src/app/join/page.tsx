import type { Metadata } from "next"
import jobs from "@/lib/jobs.json"
import Link from "next/link"

export const metadata:Metadata = {
  title: "Join SFU Surge",
}


export default function joinTeam() {

  return (
    <main>
        {jobs.map((job) => 
        (
          <div key={job.id} className="flex flex-col">
          <Link  href={`/join/${job.url}`}>{job.team}</Link>
          </div>
          
        )
        )

        }
    </main>
  )
}
