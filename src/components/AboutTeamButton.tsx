import { MouseEventHandler } from "react";

type AboutTeamButtonProps = {
    className?: string,
    title: string,
    icon: JSX.Element,
    buttonFunction?:()=> void,

  };

  export default function AboutTeamButton({
    title,
    className,
    icon,
    buttonFunction,
  }: AboutTeamButtonProps) {

    

    return (
      <button onClick={buttonFunction} className={`${className}  font-medium rounded-lg  flex flex-col gap-2 text-sm items-center aspect-square justify-center  transition-all`}>
      <div className=" " >{icon}</div>
      {title}</button>
    );
  }
  