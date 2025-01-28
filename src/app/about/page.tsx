import TeamGallery from "./TeamGallery";
import JoinDiscord from "@/components/JoinDiscord";

import { MasonryGrid } from "@/components/MasonryGrid/MasonryGrid";
import TestimonialCard from "@/components/TestimonialCard";
import { type TestimonialCardProps } from "@/components/TestimonialCard";
import { getTeamMembersCollection } from "@/lib/content/contentfulQueries";

export default async function Page() {
  let teamCollection = await getTeamMembersCollection();
  const testimonials: TestimonialCardProps[] = [
    {
      name: "Karren Susanto",
      position:
        "Digital Marketing Executive at Vertical Green, Former Director of Social Media",
      testimonial:
        "Through the club I gained my 'for life' friends, those who'll be with me by my side constantly. The club experience also helped me understand where I want to be career wise and helped me gain more experience before joining the workforce. Absolutely cherished my memories with the club!",
      src: "/testimonials/karrensusanto.jpeg",
    },
    {
      name: "Christopher Fong",
      position: "Software Developer at ICBC, Co-Director of Technology",
      testimonial:
        "Surge has not only been a catalyst for both my personal and professional growth, but it's also been a platform for me and like-minded people to connect and bring our passion for tech and hackathons to reality at SFU.\n\nI can wholeheartedly attest that Surge has provided me opportunities to become a better leader, event planner, decision-maker, speaker, teammate, and the list goes on.",
      src: "/testimonials/christopherfong.webp",
    },
    {
      name: "Johnson Luong",
      position: "Software Engineer Intern at Motorola Solutions",
      testimonial:
        "Being part of SFU Surge has placed me in the midst of incredibly inspiring and hardworking individuals who have motivated me to continuously improve myself.\n\nSurrounded by people passionate about technology and innovation, I’ve been driven to push my limits and stay committed to my growth and develop skills that I actively use in my day-to-day role at Motorola, contributing to my professional success.",
      src: "/testimonials/johnsonluong.webp",
    },
    {
      name: "Christina Raganit",
      position: "UA Design Intern at SAP, Former Director of Visual Design",
      testimonial:
        "Surge will always have a special place in my heart for helping me realize my limitless potential. Some of the most talented people I've had the pleasure of working with.",
      src: "/testimonials/christinaraganit.webp",
    },
    {
      name: "Vicky Xu",
      position:
        "Director of Finance, Business Student at Beedie School of Business",
      testimonial:
        "Surge creates a warm and welcoming work environment. Their commitment to the club’s growth inspires me to excel in my role and continuously strive for new accomplishments. ",

      src: "/testimonials/vickyxu.webp",
    },
    {
      name: "Linda Jolly",
      position:
        "Design Coordinator, Interactive Arts and Communications Major at Simon Fraser University",
      testimonial:
        "My involvement with SFU Surge helped me refine my skills in branding, UI/UX design, and project management, as we developed a cohesive visual identity and user-friendly website under tight deadlines for StormHacks. Working alongside other creatives pushed me to think outside the box and manage my time more effectively. Surge has also provided valuable networking opportunities with industry professionals and fellow designers, contributing to both my personal and professional growth.",
      src: "/testimonials/lindajolly.webp",
    },
    {
      name: "Brendan Shen",
      position: "Developer (Coordinator)",
      testimonial:
        "Since joining SFU Surge as a Developer, I've been able to gain many of valuable experiences and relevant skills in web development. Being in SFU Surge has also meant that I have had the privilege of working with a fantastic team of likeminded and skilled individuals all working towards a common goal. These team mebers have also become some of best friends who have shaped me into a more confident person both personally and professionally. Overall, my experience with SFU Surge has been fantastic and I have loved every second of it!",
      src: "/headshots/brendanshen.webp",
    },

    {
      name: "Alexandra Svoboda",
      position: "HR Coordinator, Current HR Director",
      testimonial:
        "Surge has given me the opportunity to gain professional skills while also getting the chance to meet cool people. Through my role, I have been able to gain experience in recruitment and on-boarding, learning how to foster internal engagement and how to mitigate problems. I wanted to be able to get outside of my comfort zone and personally grow in my communication and interpersonal skills and I feel like Surge has definitely helped me grow in those areas. This role has also contributed to my career. I may not be majoring in HR, but this role has so many qualities that workplaces look for and I believe I secured my current co-op at RCMP as a Media Relations students because of it.",
      src: "/headshots/alexandrasvoboda.webp",
    },
    {
      name: "Kaia Do",
      position: "Marketing Director",
      testimonial:
        "Being part of SFU Surge has expanded my knowledge in technology and computer science while also sharpening my business-related skills. As the Director of Marketing, I’ve enjoyed the creative freedom to explore new ideas, working alongside a talented and dedicated team from diverse academic backgrounds, which has been incredibly inspiring for my personal growth. Beyond professional development, the lifelong friendships I've formed at Surge are truly one of a kind.",
      src: "/headshots/kaiado.webp",
    },
    {
      name: "Angela Shen",
      position: "Marketing Director",
      testimonial:
        "Being part of SFU Surge has expanded my knowledge in technology and computer science while also sharpening my business-related skills. As the Director of Marketing, I’ve enjoyed the creative freedom to explore new ideas, working alongside a talented and dedicated team from diverse academic backgrounds, which has been incredibly inspiring for my personal growth. Beyond professional development, the lifelong friendships I've formed at Surge are truly one of a kind.",
      src: "/headshots/angelashen.webp",
    },
  ];

  return (
    <main className="flex flex-col gap-24 lg:gap-32">
      <TeamGallery teamCollection={teamCollection} />

      <section>
        <div className="text-center flex flex-col items-center">
          <p className="text-caption mb-2">OUR STORIES</p>
          <h1 className="max-w-[40rem] title-2 emphasized mb-8">
            Discover how being part of SFU Surge has shaped their journeys in
            technology and beyond.
          </h1>
        </div>
        <MasonryGrid data={testimonials} content={TestimonialCard} />
      </section>

      <JoinDiscord />
    </main>
  );
}
