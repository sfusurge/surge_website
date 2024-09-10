import EventCard from "@/components/EventCard";
import TestimonialCard from "@/components/TestimonialCard";
import eventData from "@/lib/testimonials.json"

export default function Testimonials() {
  return(
    <section>
      <div className="grid gridSmall md:gridMedium xl:gridLarge  gap-6 ">

      {eventData.map((thisEvent, index) =>{
          return(
            <div key={index} style={{gridArea: thisEvent.area}}>
              <TestimonialCard name={thisEvent.name} position={thisEvent.position} testimonial={thisEvent.testimonial} />
            </div>
          )
      } )}

      </div>
      
    </section>
  ) ;
}


{/* <div key={index} className={`col-span-${thisEvent.col} row-span-${thisEvent.row}`}>
<TestimonialCard name={thisEvent.name} position={thisEvent.position} testimonial={thisEvent.testimonial} />
</div> */}