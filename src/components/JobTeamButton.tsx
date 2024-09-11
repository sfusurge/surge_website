import { MouseEventHandler } from "react";

type JobTeamButtonProps = {
    className?: string,
    title: string,
    icon: JSX.Element,
    isActive: boolean,
    buttonFunction?:()=> void,

  };

  export default function JobTeamButton({
    title,
    className,
    icon,
    isActive,
    buttonFunction,
  }: JobTeamButtonProps) {

    

    return (
      <button onClick={buttonFunction} className={`${className} flex gap-2  button-link md ${isActive?" primary text-text-primary": " secondary text-text-secondary"}`}>
      <div className=" " >{icon}</div>
      {title}</button>
    );
  }
  