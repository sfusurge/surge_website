"use client";

import Background from "/public/assets/ship.png";
import BodyImage from "/public/assets/landing-2.png";
import Image from "next/image";

import text_content from "/public/content/text_content.json";
// gray box
// meet the team branch has blue color
function Landing() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <button className="bg-surface text-text-primary px-4 py-2 rounded-custom-radius hover:bg-brand-primary-hover">
          {text_content.homepage.landing.button_text}
        </button>
        <h1 className="mt-5 text-3xl max-w-lg text-center text-text-primary">
          {text_content.homepage.landing.title}
        </h1>
        <p className="mt-5 text-center max-w-lg text-text-secondary">
          {text_content.homepage.landing.subtitle}
        </p>
        <div className="relative w-full mt-8  ">
          <Image
            src={Background}
            alt="Background Image"
            width={2498}
            height={1255}
            objectFit="contain"
            className=" h-full w-full  lg:w-[50%] mx-auto "
            quality={100}
          />
          <div className="absolute top-0 w-full h-full overflow-x-clip">
            <div className="relative  h-full ">
              <Image
                src="/assets/rub.png"
                alt="Background Image"
                width={300}
                height={300}
                objectFit="cover"
                className="w-[30%] lg:h-[80%] lg:w-auto absolute bottom-10 right-0 lg:right-[12%] "
                quality={100}
              />
              <Image
                src="/assets/rub2.png"
                alt="Background Image"
                width={300}
                height={300}
                objectFit="cover"
                className=" w-[30%] lg:h-[80%] lg:w-auto absolute lg:left-[12%] top-0 lg:top-[-12%] "
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col-reverse md:flex-row pb-5 mb-5 md:mt-20 justify-between px-5 md:px-10 md:py-8 rounded-custom-radius items-center"
        style={{ backgroundColor: "rgba(18, 19, 24, 1)" }}
      >
        <div className="">
          <h2 className="text-brand-primary">
            {text_content.homepage.landing.card.subtitle}
          </h2>
          <h1 className="text-text-primary mt-2 text-2xl max-w-lg">
            {text_content.homepage.landing.card.title}
          </h1>
          <p className="mt-3 text-text-secondary max-w-lg">
            {text_content.homepage.landing.card.paragraph}
          </p>
          <button className="mt-5 bg-brand-primary text-text-primary px-4 py-2 rounded-custom-radius hover:bg-brand-primary-hover">
            {text_content.homepage.landing.card.button_text}
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
    </>
  );
}

export default Landing;
