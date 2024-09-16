import Image from "next/image";
import directors from "/public/surge-icons/directors.png"
import technology from "/public/surge-icons/technology.png"
import visualdesign from "/public/surge-icons/visualdesign.png"
import marketing from "/public/surge-icons/marketing.png"
import finance from "/public/surge-icons/finance.png"
import hr from "/public/surge-icons/humanresources.png"
import er from "/public/surge-icons/externalrelations.png"
import logistics from "/public/surge-icons/logistics.png"

type Team = {
    id: number;
    name: string;
    icon: JSX.Element;
  };


  export const svgIcons:{[key:string]: JSX.Element} = {
    "Directors": (
      <Image
      src={directors}
      alt=""
      quality={100}
      sizes="256px"
      />


    ),
    "Logistics": (
      <Image
      src={logistics}
      alt=""
      quality={100}
      sizes="256px"
      />
    
    ),
    "Visual Design": (
      <Image
      src={visualdesign}
      alt=""
      quality={100}
      sizes="256px"
      />
    
    ),
    "Marketing": (
      <Image
      src={marketing}
      alt=""
      quality={100}
      sizes="256px"
      />

    ),
    "Technology": (
      <Image
      src={technology}
      alt=""
      quality={100}
      sizes="256px"
      />

    ),
    "Finance": (
      <Image
      src={finance}
      alt=""
      quality={100}
      sizes="256px"
      />
    
    ),
    "Human Resources": (
      <Image
      src={hr}
      alt=""
      quality={100}
      sizes="256px"
      />


    ),
    "External Relations": (
      <Image
      src={er}
      alt=""
      quality={100}
      sizes="256px"
      />
    
    ),

  
  }
  


// master list of the current teams. Edit this to add a team. Note if team here is added it must match the number of teams in the "teams" array. I think theres probably a better way to factor that "teams" array so you don't have to ensure the numbers match but I've already spent too much time on this lol. Someone feel free to refactor this if they see a more efficient way.
  const teamNames = [
    "Directors",
    "Logistics",
    "External Relations",
    "Visual Design",
    "Marketing",
    "Technology",
    "Finance",
    "HR",
  ] as const;



//   for radio buttons to select which team to display
  export const teams: Team[] = [
    { id: 1, name: teamNames[0], icon:svgIcons["Directors"] },
    { id: 2, name: teamNames[1], icon:svgIcons["Logistics"] },
    { id: 3, name: teamNames[2], icon:svgIcons["External Relations"] },
    { id: 4, name: teamNames[3], icon:svgIcons["Visual Design"] },
    { id: 5, name: teamNames[4], icon:svgIcons["Marketing"] },
    { id: 6, name: teamNames[5], icon:svgIcons["Technology"] },
    { id: 7, name: teamNames[6], icon:svgIcons["Finance"] },
    { id: 8, name: teamNames[7], icon:svgIcons["Human Resources"] },
  ];

  