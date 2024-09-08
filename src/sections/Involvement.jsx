import React from 'react';
import InvolvementImage from "/public/involvement.png";
import Image from 'next/image';

const Involvement = () => {
  return (
    <div className="min-h-screen text-primary flex flex-col items-center py-16 px-6">
      <div className="w-full md:w-[594px] md:h-[264px] flex flex-col justify-center items-center text-center mb-16">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary uppercase tracking-wider text-s mb-4">
            Get Involved
          </h2>
          <h1 className="text-3xl mb-6">
              Are you a student at SFU hoping to build connections & host events for the tech community?
          </h1>
          <button className="bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 px-6 rounded-custom-radius transition">
              <a
                  href="#opportunities" // TODO: Replace with the actual link URL  
              >
                  View opportunities 
              </a>
          </button>
        </div>
      </div>
      <div className="w-full md:w-[1240px] md:h-[469px] bg-surface rounded-custom-radius p-8 w-full flex sm:flex-row md:flex-row lg:flex-col items-start">
        <div className="flex flex-col md:flex-row items-start custom-gap">
          <div className="flex-1">
            <h2 className="uppercase tracking-wider text-brand-primary text-s mb-4">
              Stay in the Loop
            </h2>
            <h1 className="text-3xl mb-4">
              Be the first to find out about exciting news, like when our next
              events are!
            </h1>
            <p className="text-gray-400 mb-8">
              The organizers of Simon Fraser University's largest hackathon, SFU
              Surge provides an inclusive space for students to explore their
              passions, connect with industry professionals.
            </p>
            <button className="button-link bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 px-6 rounded-custom-radius transition">
                <a
                    href="#discord" // TODO: Replace with the actual link URL  
                    // mobile layout in figma shows "Read our lore" - TODO: update to correct text
                >
                    Join our Discord server
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
