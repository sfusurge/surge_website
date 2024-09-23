"use client"

import { Children, MouseEventHandler } from "react";

type JobTeamButtonProps = {
    className?: string,
    children:React.ReactNode
    section: string


  };

  const scroll = (section:string) => {
    document.getElementById(section)?.scrollIntoView({behavior:"smooth", block:"start"})
  };

  export default function JobTeamButton({
    className,
    children,
    section,

  }: JobTeamButtonProps) {



    return (
      <button onClick={() => scroll(section)} className={ `${className} button-link primary md `}>
        {children}
      </button>
    );
  }
  