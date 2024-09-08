import type { Metadata } from "next";
import jobs from "@/lib/jobListing.json";
import Link from "next/link";
import Image from "next/image";
import JobCard from "@/components/JobCard";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Join SFU Surge",
};

export default function joinTeam() {
  return (
    <main className="flex flex-col gap-24">
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex md:justify-center  ">
          <Image
            src={"/boo.png"}
            width={1928}
            height={1598}
            alt={"hello"}
            className="object-contain  "
          />
        </div>

        <div className="flex flex-col gap-5 justify-center">
          <h1 className="large-title emphasized text-pretty max-w-xl">
            Ready to Make an Impact With Surge?
          </h1>
          <p className="paragraph">
            Join Surge and be a part of a community driving innovation in
            technology, design, and beyond. Whether you're passionate about
            coding, logistics, or media, your skills can make a difference.{" "}
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center text-center gap-2">
        <span className="text-sm font-GeistMono uppercase text-[#60A5FA] font-semibold">
          Benefits
        </span>
        <h2 className="title-1 emphasized mb-12"> Why Volunteer With Surge?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Cross-Disciplinary Skills"
            description="Learn to blend tech, design, and business for comprehensive projects."
            src="picture url here"
          />
          <Card
            title="Hands-on Experience"
            description="Work on real-world projects and enhance your tech skills."
            src="picture url here"
          />
          <Card
            title="Meet Friends"
            description="Connect with like-minded peers and build lasting friendships."
            src="picture url here"
            className="col-span-full md:col-span-1"
          />
        </div>
      </section>

      <section className="flex flex-col items-center text-center gap-2">
        <span className="text-sm font-GeistMono uppercase text-[#60A5FA] font-semibold">
          Upcoming Oppurtunity
        </span>
        <h2 className="title-1 emphasized mb-4"> Stormhacks 2024</h2>
        <p className="paragraph">Join us as we prepare for our upcoming Hackathon event, where your contributions could help shape the future of technology! Be part of the team that brings innovative ideas to life.</p>
        
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.length != 0 ? (
          jobs.map((job, index) => (
            <JobCard
              url={`join/${job.url}`}
              key={index}
              title={job.title}
              description={job.about}
              team={job.team}
            />
          ))
        ) : (
          <div>no Jobs available</div>
        )}
      </div>
    </main>
  );
}
