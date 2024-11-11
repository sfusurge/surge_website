import TestimonialCard from "@/components/TestimonialCard";
import eventData from "@/lib/testimonials.json";

export default function Testimonials() {
  return (
    <section>
      <div className="text-center flex flex-col items-center">
        <p className="text-caption mb-2">OUR STORIES</p>
        <h1 className="max-w-[40rem] title-2 emphasized mb-8">
          Discover how being part of SFU Surge has shaped their journeys in
          technology and beyond.
        </h1>
      </div>

      <div className="grid gridSmall md:gridMedium xl:gridLarge  gap-6 ">
        {eventData.map((thisEvent, index) => {
          return (
            <div key={index} style={{ gridArea: thisEvent.area }}>
              <TestimonialCard
                cardStyle={thisEvent.cardStyle}
                name={thisEvent.name}
                position={thisEvent.position}
                testimonial={thisEvent.testimonial}
                src={thisEvent.src}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

{
  /* <div key={index} className={`col-span-${thisEvent.col} row-span-${thisEvent.row}`}>
<TestimonialCard name={thisEvent.name} position={thisEvent.position} testimonial={thisEvent.testimonial} />
</div> */
}
