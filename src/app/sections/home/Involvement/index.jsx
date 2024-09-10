import React from "react";
import InvolvementImage from "/public/Discord image.png";
import Image from "next/image";

import text_content from "/public/content/text_content.json";

const Involvement = () => {
  return (
    <div className="text-primary flex flex-col items-center">
      <div className="w-full md:w-[594px] flex flex-col justify-center items-center text-center">
        <div className="text-center mb-28">
          <h2 className="text-caption">
            {text_content.homepage.get_involved.callout}
          </h2>
          <h1 className="title-1 mb-4 mt-3 emphasized">
          {text_content.homepage.get_involved.heading}
          </h1>
          <p className="paragraph mb-6">
              {text_content.homepage.get_involved.description}
            </p>
          <button className="bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 px-6 rounded-custom-radius transition">
            <a
              href="/join#openroles" // TODO: Replace with the actual link URL
            >
              {text_content.homepage.get_involved.cta}
            </a>
          </button>
        </div>
      </div>
      <div className="bg-surface rounded-custom-radius p-8 pb-0 lg:pb-0 w-full flex sm:flex-row md:flex-row lg:flex-col items-start">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:m-4 lg:w-1/2 flex items-center">
          <div>
            <h2 className="text-caption">
            {text_content.homepage.join_discord.callout}
            </h2>
            <h1 className="title-2 mb-4 mt-3 emphasized">
            {text_content.homepage.join_discord.heading}
            </h1>
            <p className="paragraph mb-6">
              {text_content.homepage.join_discord.description}
            </p>
            <button className="button-link bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 my-8 px-6 rounded-custom-radius transition mb-8">
              <a href="https://discord.gg/UcFkUktxfy">
              {text_content.homepage.join_discord.cta}
              </a>
            </button>
          </div>
          </div>

          <div className="flex-1 flex items-end justify-center">
            <Image
              src={InvolvementImage}
              alt="Involvement"
              className="w-full md:w-3/4 lg:w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Involvement;
