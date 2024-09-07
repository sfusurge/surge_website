import React from 'react';
import InvolvementImage from '@/images/involvement.png'
import Image from 'next/image';

const Involvement = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      <div className="w-full md:w-[594px] md:h-[264px] flex flex-col justify-center items-center text-center mb-16 bg-black">
        <div className="text-center mb-16">
          <h2 className="text-blue-200 uppercase tracking-wider text-[14px] mb-4">
            Get Involved
          </h2>
          <h1 className="text-3xl md:text-4xl mb-6">
              Are you a student at SFU hoping to build connections & host events for the tech community?
          </h1>
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-full transition duration-300">
              <a
                  href="#opportunities" // TODO: Replace with the actual link URL  
              >
                  View opportunities 
              </a>
          </button>
        </div>
      </div>
      <div className="w-full md:w-[1240px] md:h-[469px] bg-gray-800 rounded-xl p-8 w-full flex sm:flex-row md:flex-row lg:flex-col items-start">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <h2 className="uppercase tracking-wider text-[14px] mb-4">
              Stay in the Loop
            </h2>
            <h1 className="text-2xl md:text-3xl mb-4">
              Be the first to find out about exciting news, like when our next
              events are!
            </h1>
            <p className="text-gray-400 mb-8">
              The organizers of Simon Fraser University's largest hackathon, SFU
              Surge provides an inclusive space for students to explore their
              passions, connect with industry professionals.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-full transition duration-300">
                <a
                    href="#discord" // TODO: Replace with the actual link URL  
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
