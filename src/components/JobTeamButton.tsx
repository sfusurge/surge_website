import { MouseEventHandler } from "react";

type JobTeamButtonProps = {
    className?: string,
    title: string,
    icon: JSX.Element,
    isActive: boolean,
    count?: number,
    buttonFunction?:()=> void,

  };

  export default function JobTeamButton({
    title,
    className,
    icon,
    isActive,
    count,
    buttonFunction,
  }: JobTeamButtonProps) {

    

    return (
      <button onClick={buttonFunction} className={`${className} ${count?"flex":"hidden"} flex gap-2  button-link md ${isActive?" primary text-text-primary": " secondary text-text-secondary"}`}>
      <div className=" w-8 " >{icon}</div>
      {title} {"(" + count + ")"}
      </button>
    );
  }
  