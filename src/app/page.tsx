import Image from "next/image";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main
        style={{ backgroundColor: "rgb(13,14,19)" }}>
      <Events />
    </main>
  );
}
