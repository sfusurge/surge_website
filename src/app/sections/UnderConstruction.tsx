import Image from "next/image";
import StormHacksImage from "/public/stormhacks.png";
import RoleButton from "@/components/RoleButton";
import Link from "next/link";

const UnderConstruction = () => {
  return (
    <div className="text-center min-h-[50vh]">
      <h4 className="text-caption pb-6">Hey, sorry to inform but...</h4>
      <h1 className="title-2 emphasized p-8">
        This page is currently under construction. Check back later to see
        what's changed!
      </h1>

      <Image
        src={StormHacksImage}
        className="w-1/2 aspect-square object-top object-cover rounded-bl-custom-radius rounded-br-custom-radius mx-auto"
        alt=""
      />
      <button className="button-link bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 my-8 px-6 mx-auto rounded-custom-radius transition mb-8">
        <Link href="/">Back to homepage</Link>
      </button>
    </div>
  );
};

export default UnderConstruction;
