import type { Metadata } from "next";
import Image from "next/image";
import Card from "@/components/Card";
import OpenRolesSection from "@/components/OpenRolesSection";
import ButtonScroll from "@/components/ButtonScroll";
import InfoItem from "@/components/InfoItem";

import text_content from "@/lib/content/text_content.json";

export const metadata: Metadata = {
  title: "Join SFU Surge",
};

export default function JoinTeam() {
  return (
    <main className="flex flex-col gap-24 md:gap-48">
      <section className="flex flex-col items-center justify-center text-center overflow-hidden gap-16">
        <div className="flex flex-col gap-5 justify-center w-fit items-center  ">
          <h1 className="large-title emphasized text-pretty max-w-xl">
            {text_content.join.heading}
          </h1>
          <p className="paragraph mb-0">{text_content.join.description}</p>

          <ButtonScroll section="openroles">
            {text_content.join.cta}
          </ButtonScroll>
        </div>

        <div className="flex md:justify-center h-full min-w-[25rem] max-w-[50rem]   ">
          <Image
            src={"/workshop.png"}
            width={1824}
            height={1099}
            alt={"hello"}
            className="object-contain max-h-full"
          />
        </div>
      </section>

      <section className="flex flex-col items-center text-center gap-2">
        <span className="text-caption">
          {text_content.join.benefits.callout}
        </span>
        <h2 className="title-1 emphasized mb-12">
          {text_content.join.benefits.heading}
        </h2>

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

      <section className="flex flex-col items-center text-center gap-2 ">
        <span className="text-caption">
          {text_content.join.opportunities.callout}
        </span>
        <h2 className="title-1 emphasized mb-4">
          {" "}
          {text_content.join.opportunities.heading}
        </h2>
        <p className="paragraph">
          {text_content.join.opportunities.description}
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-8 gap-y-16 md:grid-cols-4 mt-8">
          <InfoItem stat={"2,543"} description={"total hackers"} />
          <InfoItem stat={"134"} description={"Projects"} />
          <InfoItem stat={"$12,000"} description={"awarded in prizes"} />
          <InfoItem stat={"300"} description={"participants"} />
        </div>
      </section>

      <OpenRolesSection id="openroles" />
    </main>
  );
}
