"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import path from "path";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    const newWidth: number = window.innerWidth;
    if (newWidth > 640) {
      setIsOpen(false);
    }
  };

  const handleClick = (e:MouseEvent) => {
    if(!navRef.current?.contains(e.target as Node)){
      setIsOpen(false)
    }
  }

  useEffect(() => {
    setIsOpen(false)
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClick)
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClick)
    };
  },[pathname]); 

  return (
    <div className="fixed w-full left-0 top-0 text-sm px-6 sm:px-12  z-[1000]">
      {/* used for progressive blur behind navbar */}
      <div className="w-screen h-full absolute top-0 left-0 bg-black/20  [mask-image:linear-gradient(180deg,_rgba(0,0,0,1)_20%,_rgba(255,255,255,0)_80%)]  backdrop-blur-[8px]" ></div>

      <div
      ref={navRef}
        className={` ${
          isOpen ? "h-[23rem]" : "h-[3.5rem]"
        } mx-auto  bg-raised/80 border border-white/5 transition-all duration-300  mt-4 backdrop-blur-md rounded-xl overflow-hidden flex flex-col sm:flex-row sm:justify-between p-4 max-w-[40rem] z-[1000]`}
      >
        <ul className={` flex w-full sm:w-auto items-center  `}>
          {/* surge logo */}
          <li className="flex items-center ml-0.5">
            <Link href="/">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.68665 8.57212L8.49201 1.38689L10.6568 5.07739L7.9332 6.98924L9.29675 8.69076L10.6602 10.3924L6.32222 13.7182L7.64217 9.28822L5.68665 8.57212Z"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
          {/* hamburger and x buttons for nav toggle */}
          <li className="flex items-center ml-auto">
            <button className="sm:hidden relative ml-auto" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 ${isOpen ? "hidden" : "flex"} `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6 ${isOpen ? "flex" : "hidden"} `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        </ul>

        {/* content box for nav links */}
        <div className="flex justify-center sm:justify-normal">
          <ul className="flex flex-col sm:flex-row sm:gap-4  gap-6 font-GeistMono mt-8 sm:mt-0 items-center uppercase">
            <li>
              <Link className="link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className="link" href="/sponsor">
                Sponsor Us
              </Link>
            </li>
            <li>
              <Link className="link mr-0.5" href="/join">
                Join Our Team
              </Link>
            </li>
            {/* social media icons and links */}
            <li className="flex sm:hidden gap-6">
              <Link href="https://discord.gg/UcFkUktxfy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#EBEBF5"
                    fillOpacity=".6"
                    d="M19.7682 5.33c-1.33-.62-2.77-1.07-4.27-1.33a.09987.09987 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09995 16.09995 0 0 0-4.8 0c-.14004-.34-.35004-.76-.54004-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44004 1.57 7.15004 1.57 10.55004 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02ZM9.01816 14.91c-1.03 0-1.89-.95-1.89-2.12 0-1.17.84-2.12 1.89-2.12 1.06004 0 1.90004.96 1.89004 2.12 0 1.17-.84 2.12-1.89004 2.12Zm6.97004 0c-1.03 0-1.89-.95-1.89-2.12 0-1.17.84-2.12 1.89-2.12 1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12Z"
                  />
                </svg>
              </Link>

              <Link href="https://www.instagram.com/sfusurge/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#EBEBF5"
                    fillOpacity=".6"
                    d="M13.0286 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03 1.064.05 1.79.218 2.427.465.66.254 1.216.598 1.772 1.153a4.89967 4.89967 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31c.0024.7294-.0053 1.4588-.023 2.188l-.006.194c-.008.225-.018.446-.03.712-.05 1.065-.22 1.79-.466 2.428a4.89967 4.89967 0 0 1-1.153 1.772 4.90052 4.90052 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a77.92186 77.92186 0 0 1-2.18903-.023l-.194-.006a62.64301 62.64301 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.89903 4.89903 0 0 1-1.771-1.153 4.89982 4.89982 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712-.005-.194a78.97031 78.97031 0 0 1-.025-2.188v-2.056a79.00698 79.00698 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712.05-1.065.218-1.79.465-2.428a4.89994 4.89994 0 0 1 1.156-1.772 4.89996 4.89996 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465.266-.012.488-.022.712-.03l.194-.006a79.0095 79.0095 0 0 1 2.18803-.023L13.0286 2Zm-1.028 5a5.00004 5.00004 0 0 0-5.00003 5c0 1.3261.52678 2.5979 1.46446 3.5355A5.00002 5.00002 0 0 0 12.0006 17c1.3261 0 2.5978-.5268 3.5355-1.4645a4.99991 4.99991 0 0 0 0-7.07103A4.9999 4.9999 0 0 0 12.0006 7Zm0 2a3.00028 3.00028 0 0 1 1.1481.22817c.364.1507.6947.37163.9733.65016.2787.27857.4997.60917.6505.97317.1508.3639.2285.754.2286 1.148 0 .394-.0775.7841-.2282 1.1481a2.99988 2.99988 0 0 1-1.6233 1.6238c-.364.1509-.7541.2285-1.148.2286a3.00002 3.00002 0 0 1-3.00003-3c0-.7956.31607-1.5587.87868-2.12132A3.00005 3.00005 0 0 1 12.0016 9m5.25-3.5c-.3316 0-.6495.1317-.8839.36612a1.25006 1.25006 0 0 0 0 1.76776C16.6021 7.8683 16.92 8 17.2516 8c.3315 0 .6494-.1317.8839-.36612a1.25006 1.25006 0 0 0 0-1.76776A1.25022 1.25022 0 0 0 17.2516 5.5Z"
                  />
                </svg>
              </Link>

              <Link href="https://github.com/sfusurge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#EBEBF5"
                      fillOpacity=".6"
                      d="M12 2c-1.3132 0-2.61358.25866-3.82683.7612a10.00018 10.00018 0 0 0-3.24424 2.16773C3.05357 6.8043 2 9.34784 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10.0009 10.0009 0 0 0-.7612-3.82683 10.00057 10.00057 0 0 0-2.1677-3.24424A10.0001 10.0001 0 0 0 12 2Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link href="https://devpost.com/hackathons?organization=SFU%20Surge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#EBEBF5"
                      fillOpacity=".6"
                      d="M6.002 1.61011 0 12.0041l6.002 10.386h11.996L24 12.0041 17.998 1.61011H6.002Zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.30999 0 4.436-3.21 6.302-6.456 6.302H7.595V5.69411Zm2.517 2.449v7.71399h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.56899-1.096-3.85299-3.767-3.85299h-1.336Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
