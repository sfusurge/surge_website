import { MouseEventHandler } from "react";

type RoleButtonProps = {
    className?: string,
    title: string,
    buttonFunction?:()=> void
  };
  export default function RoleButton({
    title,
    className,
    buttonFunction,
  }: RoleButtonProps) {
    return (
      <button onClick={buttonFunction} className={`${className}  bg-slate-400 rounded-lg overflow-hidden flex flex-col gap-2 text-sm items-center p-3 w-24 transition-all`}>
        <div className="w-9 aspect-square bg-slate-300"></div>
      {title}</button>
    );
  }
  