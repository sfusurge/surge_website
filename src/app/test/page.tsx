import { MasonryGrid, MasonryGridItem } from "@/components/MasonryGrid/MasonryGrid";
import TestimonialCard from "@/components/TestimonialCard";
import { TestimonialCardProps } from "@/components/TestimonialCard"

export default function TestPage({ }) {
    const data: TestimonialCardProps[] = [
        {
            "name": "Karren Susanto",
            "position": "Digital Marketing Executive at Vertical Green, Former Director of Social Media",
            "testimonial": "Through the club I gained my 'for life' friends, those who'll be with me by my side constantly. The club experience also helped me understand where I want to be career wise and helped me gain more experience before joining the workforce. Absolutely cherished my memories with the club!",
            "src": "/testimonials/karrensusanto.jpeg"
        },
        {
            "name": "Christopher Fong",
            "position": "Software Developer at ICBC, Co-Director of Technology",
            "testimonial": "Surge has not only been a catalyst for both my personal and professional growth, but it's also been a platform for me and like-minded people to connect and bring our passion for tech and hackathons to reality at SFU.\n\nI can wholeheartedly attest that Surge has provided me opportunities to become a better leader, event planner, decision-maker, speaker, teammate, and the list goes on.",
            "src": "/testimonials/christopherfong.jpg"
        },
        {
            "name": "Johnson Luong",
            "position": "Software Engineer Intern at Motorola Solutions",
            "testimonial": "Being part of SFU Surge has placed me in the midst of incredibly inspiring and hardworking individuals who have motivated me to continuously improve myself.\n\nSurrounded by people passionate about technology and innovation, I’ve been driven to push my limits and stay committed to my growth and develop skills that I actively use in my day-to-day role at Motorola, contributing to my professional success.",
            "src": "/testimonials/johnsonluong.jpg"
        },
        {
            "name": "Christina Raganit",
            "position": "UA Design Intern at SAP, Former Director of Visual Design",
            "testimonial": "Surge will always have a special place in my heart for helping me realize my limitless potential. Some of the most talented people I've had the pleasure of working with.",
            "src": "/testimonials/christinaraganit.jpg"
        },
        {
            "name": "Vicky Xu",
            "position": "Director of Finance, Business Student at Beedie School of Business",
            "testimonial": "Surge creates a warm and welcoming work environment. Their commitment to the club’s growth inspires me to excel in my role and continuously strive for new accomplishments. ",

            "src": "/testimonials/vickyxu.jpg"
        },
        {
            "name": "Linda Jolly",
            "position": "Design Coordinator, Interactive Arts and Communications Major at Simon Fraser University",
            "testimonial": "My involvement with SFU Surge helped me refine my skills in branding, UI/UX design, and project management, as we developed a cohesive visual identity and user-friendly website under tight deadlines for StormHacks. Working alongside other creatives pushed me to think outside the box and manage my time more effectively. Surge has also provided valuable networking opportunities with industry professionals and fellow designers, contributing to both my personal and professional growth.",
            "src": "/testimonials/lindajolly.jpg"
        }, {
            "name": "Brendan Shen",
            position:"Developer (Coordinator)",
            testimonial: "Since joining SFU Surge as a Developer, I've been able to gain many of valuable experiences and relevant skills in web development. Being in SFU Surge has also meant that I have had the privilege of working with a fantastic team of likeminded and skilled individuals all working towards a common goal. These team mebers have also become some of best friends who have shaped me into a more confident person both personally and professionally. Overall, my experience with SFU Surge has been fantastic and I have loved every second of it!",
            "src":""
        }
    ]


    return <div>
        <MasonryGrid data={data} content={TestimonialCard} />
    </div>
}


