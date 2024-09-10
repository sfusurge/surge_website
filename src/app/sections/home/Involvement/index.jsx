import React from "react";
import InvolvementImage from "/public/Discord image.png";
import Image from "next/image";

import text_content from "/public/content/text_content.json";

const Involvement = () => {
  return (
    <div className="text-primary flex flex-col items-center pt-16 px-6">
      <div className="w-full md:w-[594px] md:h-[264px] flex flex-col justify-center items-center text-center mb-16">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary uppercase tracking-wider text-s mb-4">
            {text_content.homepage.get_involved.callout}
          </h2>
          <h1 className="text-3xl mb-6">
          {text_content.homepage.get_involved.heading}
          </h1>
          <p className="text-gray-400 mb-8">
              {text_content.homepage.get_involved.description}
            </p>
          <button className="bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 px-6 rounded-custom-radius transition">
            <a
              href="#opportunities" // TODO: Replace with the actual link URL
            >
              {text_content.homepage.get_involved.cta}
            </a>
          </button>
        </div>
      </div>
      <div className="md:max-w-[1240px] bg-surface rounded-custom-radius p-8 pb-0 lg:pb-8 w-full flex sm:flex-row md:flex-row lg:flex-col items-start">
        <div className="flex flex-col md:flex-row items-start custom-gap">
          <div className="flex-1">
            <h2 className="uppercase tracking-wider text-brand-primary text-s mb-4">
            {text_content.homepage.join_discord.callout}
            </h2>
            <h1 className="text-3xl mb-4">
            {text_content.homepage.join_discord.heading}
            </h1>
            <p className="text-gray-400 mb-8">
              {text_content.homepage.join_discord.description}
            </p>
            <button className="button-link bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 my-8 px-6 rounded-custom-radius transition">
              <a href="https://discord.gg/UcFkUktxfy">
              {text_content.homepage.join_discord.cta}
              </a>
            </button>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <Image
              src={InvolvementImage}
              alt="Involvement"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Involvement;
