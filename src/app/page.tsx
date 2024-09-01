import Image from "next/image";
import Landing from "./pages/Landing";

export default function Home() {
  return (
    <main className="bg-sunken">
      <Landing />
      <h1 className="large-title">SFU Surge is definitely a club</h1>
      <p className="">fr fr</p>
      <a className="button-link md primary">Click here</a>
    </main>
  );
}
