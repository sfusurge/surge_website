import type { Metadata } from "next";
import Image from "next/image";
import Card from "@/components/Card";
import OpenRolesSection from "@/components/OpenRolesSection";
import ButtonScroll from "@/components/ButtonScroll";
import JoinTeam from "@/app/sections/join/MainSection";
import TeamGallery from "@/app/sections/about/TeamGallery";


export const metadata: Metadata = {
  title: "Join SFU Surge",
};

export default function joinTeam() {

  return (
    <JoinTeam/>
  );
}
