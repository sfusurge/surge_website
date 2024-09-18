import React from "react";
import InvolvementImage from "/public/Discord image.png";
import Image from "next/image";

import text_content from "@/lib/content/text_content.json";
import JoinDiscord from "@/components/JoinDiscord";

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
              href="/join#openroles" 
            >
              {text_content.homepage.get_involved.cta}
            </a>
          </button>
        </div>
      </div>
      <JoinDiscord/>
    </div>
  );
};

export default Involvement;
