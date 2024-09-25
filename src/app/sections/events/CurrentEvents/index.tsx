'use client'
import EventCard from "@/components/EventCard";
import eventData from "@/lib/eventsData.json";
import {useEffect, useState} from 'react';

// revise the type declarations -- using any might not be best practice
// people -- socials

// types in the code -- type safety
// finish CMS and work on other content models

export default function CurrentEvents() {

  const [data, setData] = useState<any>(null);
  
// clarifying binary data or formatting in client when making request

  const request_data = useEffect(() => {
    async function fetchdata() {
      const res = await fetch("");
      const result = await res.json();
      setData(result);
    } 
    fetchdata()
  }, [])

  console.log(data);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {data?.items.map((thisEvent: any, index: any) => {
        const { title, time, location } = thisEvent.fields; 

        return (
          <EventCard
            key={index}
            title={title}       
            time={time}        
            location={location} 
          />
        );
      })}

    
    </section>
  );
}
