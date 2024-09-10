"use client";

import Background from "/public/assets/landing.png";
import BodyImage from "/public/about us.png";
import Rocket from "/public/rocket-no-elements.png";
import Image from "next/image";

import text_content from "/public/content/text_content.json";
// gray box
// meet the team branch has blue color
function Landing() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 content-wrapper text-center flex flex-col items-center">
          <h1 className="large-title emphasized">
            {text_content.homepage.landing.heading}
          </h1>
          <p className="mt-5 text-text-secondary paragraph lg:mb-0">
            {text_content.homepage.landing.description}
          </p>
        </div>

        <div className="relative w-full">
          {/* <Image
            src={Rocket}
            alt="Background Image"
            layout="fill"
            objectFit="contain"
            quality={100}
            className="w-full"
          /> */}
          <img
            src="rocket-no-elements.png"
            className="w-full max-w-[90rem]"
          ></img>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="green star 1.png"
              className="w-[5.2785%] h-auto relative left-[1.672%] top-[4.28%] animate-bounce"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="purple star 1.png"
              className="w-[6.403%] h-auto relative left-[16.67%] top-[7.521%] animate-spin"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="yellow star 1.png"
              className="w-[6.635%] h-auto relative top-[16.69%] animate-pulse"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="small purple star 1.png"
              className="w-[3.9105%] h-auto relative left-[4.424%] top-[29.5%]"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="stars.png"
              className="w-[54.47%] h-auto relative left-[17.3565%] top-[25.797%]"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="large pink star 1.png"
              className="w-[5.933%] h-auto relative left-[85.683%] top-[42.37%] animate-bounce"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="large pink star 2.png"
              className="w-[4.279%] h-auto relative left-[83.2225%] top-[78.778%] animate-spin"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="large purple star.png"
              className="w-[6.269%] h-auto relative left-[80.508%] top-[54.25477%] animate-pulse"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="small green star.png"
              className="w-[3.2925%] h-auto relative left-[89.5885%] top-[64.897%] animate-pulse"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="glasses.png"
              className="w-[7.291%] h-auto relative left-[37.18%] top-[8.71%]"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="big-bubble.png"
              className="w-[6.4065%] h-auto relative left-[25%] top-[68.83%] animate-ping"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="small-bubble.png"
              className="w-[1.368%] h-auto relative left-[24.09%] top-[81.85%] animate-ping"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="bubble.png"
              className="w-[2.8285%] h-auto relative left-[30.489%] top-[80.01%] animate-ping"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="light-bubble.png"
              className="w-[2.434%] h-auto relative left-[32.112%] top-[75.84%] animate-ping"
            ></img>
          </div>

          {/* <div className="absolute top-0 left-0 w-full h-full">
            {" "}
            <img
              src="s key cap.png"
              className="w-[6.51%] h-auto relative left-[6.96%] top-[10.46%] animate-"
            ></img>
          </div> */}

          {/* <div className="absolute top-0 left-0 w-full h-full">
            {" "}
            <img
              src="u key cap.png"
              className="w-[5.99%] h-auto relative left-[17.91%] top-[10.95%]"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            {" "}
            <img
              src="r key cap.png"
              className="w-[6.42%] h-auto relative left-[62.35%] top-[75.54%]"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            {" "}
            <img
              src="g key cap.png"
              className="w-[5.78%] h-auto relative left-[75.28%] top-[80.63%]"
            ></img>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            {" "}
            <img
              src="e key cap.png"
              className="w-[5.687%] h-auto relative left-[88.84%] top-[73.8%]"
            ></img>
          </div> */}
        </div>
      </div>

      <div
        className="flex flex-col-reverse lg:flex-row pb-5 mt-16 md:mt-20 justify-between px-5 md:px-10 md:py-8 rounded-custom-radius items-center gap-8 lg:gap-8 bg-surface"
      >
        <div className="lg:m-4">
          <h2 className="text-caption">
            {text_content.homepage.about.callout}
          </h2>
          <h1 className="title-2 emphasized mb-4 mt-3">
            {text_content.homepage.about.heading}
          </h1>
          <p className="paragraph">{text_content.homepage.about.description}</p>
          <button className="mt-5 bg-brand-primary text-text-primary px-4 py-2 rounded-custom-radius hover:bg-brand-primary-hover">
            {text_content.homepage.about.cta}
          </button>
        </div>
        <img src="about us.png" className="w-full md:w-3/4 lg:w-1/2" />
      </div>
    </>
  );
}

export default Landing;
