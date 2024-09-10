import Image from "next/image";
import StormHacksImage from "/public/stormhacks.png";
import RoleButton from "@/components/RoleButton";
import Link from "next/link";

import text_content from "/public/content/text_content.json";

const UnderConstruction = () => {
  return (
    <div className="text-center min-h-[50vh]">
      <h4 className="text-caption pb-6">
        {text_content.under_construction.caption}
      </h4>
      <h1 className="title-2 emphasized p-8">
        {text_content.under_construction.title}
      </h1>

      <Image
        src={StormHacksImage}
        className="w-1/2 aspect-square object-top object-cover rounded-bl-custom-radius rounded-br-custom-radius mx-auto"
        alt=""
      />
      <button className="button-link bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 my-8 px-6 mx-auto rounded-custom-radius transition mb-8">
        <Link href="/">{text_content.under_construction.redirect_button}</Link>
      </button>
    </div>
  );
};

export default UnderConstruction;
