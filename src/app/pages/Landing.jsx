import NavBar from "../components/NavBar";
import Background from "../assets/landing.png";
import BodyImage from "../assets/landing-2.png";
import Image from "next/image";

function Landing() {
    return (
        <div className="bg-purple-800">
            <div className="fixed top-0 left-0 w-full z-20">
                <NavBar />
            </div>

            <div className="flex flex-col items-center justify-center h-screen pt-20">
                <button className="mt-20 bg-purple-500 text-white px-2 py-2 rounded-2xl">
                    Apply to StormHacks x Enactus now! &rarr;
                </button>
                <h1 className="mt-5 text-4xl max-w-md text-center text-white">
                    SFU Surge lorem ipsum dolor sit amet consectetur
                </h1>
                <p className="mt-5 text-center max-w-md text-gray-400">
                    The organizers of Simon Fraser University's largest hackathon, SFU Surge provides an inclusive space for students to explore their passions, connect with industry professionals.
                </p>
                <div className="relative w-full max-w-2xl h-80">
                    <Image
                        src={Background}
                        alt="Background Image"
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row pb-10 pl-10 pr-10">
                <div className="md:w-1/2 md:pl-10">
                    <h2 className="text-blue-400">WHAT'S SFU SURGE</h2>
                    <h1 className="mt-2 text-white mt-5 text-3xl max-w-md">
                        Deadass all we do is play Stardew Valley and League of Legends
                    </h1>
                    <p className="mt-3 text-gray-400">
                        The organizers of Simon Fraser University's largest hackathon, SFU Surge provides an inclusive space for students to explore their passions, connect with industry professionals.
                    </p>
                    <button className="mt-5 bg-purple-400 text-white px-2 py-2 rounded-2xl">
                        Read our lore
                    </button>
                </div>
                <div className="relative w-full md:w-1/2 max-w-2xl h-60 mb-12">
                    <Image 
                        src={BodyImage}
                        alt="Body Image"
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
}

export default Landing;
