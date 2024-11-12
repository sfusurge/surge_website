import { HomeCard, HomeCardProps } from "@/components/HomeCard/HomeCard";

export default function Page() {
    const cards: HomeCardProps[] = [
        {
            title: "Tester event",
            description: "Just a testing event, nothing happens here!",
            src: "/images/test.png",
            url: "https://google.ca",
            date: new Date(),
            location:"Online"
        },
    ];
    return (
        <div>
            <HomeCard {...cards[0]}></HomeCard>
        </div>
    );
}
