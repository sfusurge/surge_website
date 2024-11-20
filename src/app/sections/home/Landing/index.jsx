"use client";

import Background from "/public/assets/landing.webp";
import BodyImage from "/public/aboutus.webp";
import Rocket from "/public/rocket-no-elements.webp";
import Image from "next/image";

import text_content from "@/lib/content/text_content.json";
// gray box
// meet the team branch has blue color
function Landing() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 content-wrapper text-center flex flex-col items-center">
          <h1 className="large-title emphasized max-w-5xl">
            {text_content.homepage.landing.heading}
          </h1>
          <p className="mt-5 text-text-secondary paragraph lg:mb-0">
            {text_content.homepage.landing.description}
          </p>
        </div>

        <div className="relative w-full">
          <Image
            src={Rocket}
            alt="Rocket without elements"
            layout="responsive"
            width={2498}
            height={1255}
            className="w-full max-w-[90rem]"
            quality={100}
          />

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/green star 1.png"
              alt="Green Star"
              width={52}
              height={52}
              className="w-[5.2785%] h-auto relative left-[1.672%] top-[4.28%] animate-bounce"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/purple star 1.png"
              alt="Purple Star"
              width={65}
              height={65}
              className="w-[6.403%] h-auto relative left-[16.67%] top-[7.521%] animate-spin"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/yellow star 1.png"
              alt="Yellow Star"
              width={66}
              height={66}
              className="w-[6.635%] h-auto relative top-[16.69%] animate-pulse"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/small purple star 1.png"
              alt="Small Purple Star"
              width={39}
              height={39}
              className="w-[3.9105%] h-auto relative left-[4.424%] top-[29.5%]"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/stars.webp"
              alt="Stars"
              width={544}
              height={544}
              className="w-[54.47%] h-auto relative left-[17.3565%] top-[25.797%]"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/large pink star 1.png"
              alt="Large Pink Star"
              width={59}
              height={59}
              className="w-[5.933%] h-auto relative left-[85.683%] top-[42.37%] animate-bounce"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/large pink star 2.png"
              alt="Large Pink Star 2"
              width={42}
              height={42}
              className="w-[4.279%] h-auto relative left-[83.2225%] top-[78.778%] animate-spin"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/large purple star.png"
              alt="Large Purple Star"
              width={63}
              height={63}
              className="w-[6.269%] h-auto relative left-[80.508%] top-[54.25477%] animate-pulse"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/small green star.png"
              alt="Small Green Star"
              width={33}
              height={33}
              className="w-[3.2925%] h-auto relative left-[89.5885%] top-[64.897%] animate-pulse"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/glasses.png"
              alt="Glasses"
              width={72}
              height={72}
              className="w-[7.291%] h-auto relative left-[37.18%] top-[8.71%]"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/big-bubble.png"
              alt="Big Bubble"
              width={64}
              height={64}
              className="w-[6.4065%] h-auto relative left-[25%] top-[68.83%] animate-ping"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/small-bubble.png"
              alt="Small Bubble"
              width={14}
              height={14}
              className="w-[1.368%] h-auto relative left-[24.09%] top-[81.85%] animate-ping"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/bubble.png"
              alt="Bubble"
              width={28}
              height={28}
              className="w-[2.8285%] h-auto relative left-[30.489%] top-[80.01%] animate-ping"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/light-bubble.png"
              alt="Light Bubble"
              width={24}
              height={24}
              className="w-[2.434%] h-auto relative left-[32.112%] top-[75.84%] animate-ping"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row pb-5 mt-16 md:mt-20 justify-between px-5 md:px-10 md:py-8 rounded-custom-radius items-center gap-8 lg:gap-8 bg-surface">
        <div className="lg:m-4">
          <h2 className="text-caption">{text_content.homepage.about.callout}</h2>
          <h1 className="title-2 emphasized mb-4 mt-3">
            {text_content.homepage.about.heading}
          </h1>
          <p className="paragraph">{text_content.homepage.about.description}</p>
          <a href="/about" className="block w-fit mt-5 bg-brand-primary text-text-primary px-4 py-2 rounded-custom-radius hover:bg-brand-primary-hover">
            {text_content.homepage.about.cta}
          </a>
        </div>

        <Image
          src={BodyImage}
          alt="About us"
          width={500} 
          height={500} 
          className="w-full md:w-3/4 lg:w-1/2"
        />
      </div>
    </>
  );
}

export default Landing;
