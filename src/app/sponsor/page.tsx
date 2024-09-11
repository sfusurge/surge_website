import Link from "next/link";
import sponsorImages from './sponsors.json'
import Image from "next/image";

const TextSection = () => {
    return (
        <>
            <section
                className="flex flex-col gap-4">
                <h6
                    className="font-GeistMono text-brand-primary text-center
                    text-s font-semibold">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    SPONSOR US
                </h6>
                <h2
                    className="text-center title-1 emphasized">
                    Pls sponsor our hackathons, we need the money &#129402;
                </h2>
                <p className="text-center text-text-secondary">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    The organizers of Simon Fraser University's largest hackathon, SFU Surge provides an inclusive space
                    for students to explore their passions, connect with industry professionals.
                </p>
                <button
                    className="button-link md primary text-center text-text-primary to-brand-primary"
                    style={{ backgroundColor: '#364FB8', display: 'inline-block', margin: '0 auto' }}
                >
                    {/* Replace href later */}
                    <Link className="link" href="/about"> 
                        Read Our Lore
                    </Link>
                </button>
                <h3
                  className="text-center title-2 emphasized mt-20">
                  Some of our previous sponsors include...
                </h3>
            
            </section>
        </>
    );
};


const SponsorImages = () => {
    console.log(sponsorImages)
    return (
        <div className="flex flex-wrap justify-center gap-4">
            
            {sponsorImages.map((sponsor: any) => (
                <div key={sponsor.name} className="flex flex-col items-center" style={{ width: "18.25rem" }}>
                    <Image
                        alt={sponsor.link}
                        src={sponsor.image}
                        width={292} // Set the exact dimensions for the image file itself
                        height={200}
                        className="w-[18.25rem] h-[12.5rem] rounded-[1.5rem]"
                    />
                </div>
            ))}
        </div>
    );
};

const Sponsors = () => {
    return (
      <div className="flex flex-col gap-12"> {/* Add gap between sections here */}
        <TextSection />
        <SponsorImages />
      </div>
    );
};

export default Sponsors