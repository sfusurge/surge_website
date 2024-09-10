import ButtonScroll from "@/components/ButtonScroll";
import Image from "next/image";

export default function EventsHero() {
  return (
    <main className="flex gap-12 xl:gap-48 flex-col md:flex-row w-full justify-center">
      <section className="flex  md:flex-row  w-full gap-16 lg:gap-12 flex-col-reverse items-center justify-center ">
        <div className="flex md:justify-center h-full md:w-[40%]   ">
          <Image
            src={"/events.png"}
            width={1659}
            height={1421}
            alt={"hello"}
            className="object-contain max-h-full"
          />
        </div>

        <div className="flex flex-col gap-5 justify-center w-fit  ">
          <h1 className="large-title emphasized text-pretty max-w-xl">
          Surge Events
          </h1>
          <p className="paragraph max-w-[28rem] text-pretty">
          Surge has a wide variety of events held monthly, from workshops to Hackathons and socials. Check out the list of events below
          </p>
          <ButtonScroll section="">See Current Events</ButtonScroll>
        </div>
      </section>
    </main>
  );
}
