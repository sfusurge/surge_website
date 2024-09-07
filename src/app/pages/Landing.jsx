import NavBar from "../components/NavBar";
import Background from "../assets/landing.png";
import BodyImage from "../assets/landing-2.png";
import Image from "next/image";

function Landing() {
  return (
    <div className="bg-surface">
      <div className="flex flex-col items-center justify-center">
        <button className="bg-surface text-text-primary px-4 py-2 rounded-custom-radius hover:bg-brand-primary-hover">
          Apply to StormHacks x Enactus now! &rarr;
        </button>
        <h1 className="mt-5 text-3xl max-w-lg text-center text-text-primary">
          SFU Surge lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="mt-5 text-center max-w-lg text-text-secondary">
          The organizers of Simon Fraser University's largest hackathon, SFU
          Surge provides an inclusive space for students to explore their
          passions, connect with industry professionals.
        </p>
        <div className="relative w-full max-w-4xl h-[25rem]">
          <Image
            src={Background}
            alt="Background Image"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row pb-10 md:mt-20 justify-between">
        <div className="">
          <h2 className="text-brand-primary">WHAT'S SFU SURGE</h2>
          <h1 className="text-text-primary mt-2 text-2xl max-w-lg">
            Deadass all we do is play Stardew Valley and League of Legends
          </h1>
          <p className="mt-3 text-text-secondary max-w-lg">
            The organizers of Simon Fraser University's largest hackathon, SFU
            Surge provides an inclusive space for students to explore their
            passions, connect with industry professionals.
          </p>
          <button className="mt-5 bg-brand-primary text-text-primary px-4 py-2 rounded-custom-radius hover:bg-brand-primary-hover">
            Read our lore
          </button>
        </div>
        <div className="relative w-full max-w-2xl h-80 mb-12">
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
