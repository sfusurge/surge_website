type Team = {
    id: number;
    name: string;
  };



// master list of the current teams. Edit this to add a team. Note if team here is added it must match the number of teams in the "teams" array. I think theres probably a better way to factor that "teams" array so you don't have to ensure the numbers match but I've already spent too much time on this lol. Someone feel free to refactor this if they see a more efficient way.
  const teamNames = [
    "President",
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
    { id: 1, name: teamNames[0] },
    { id: 2, name: teamNames[1] },
    { id: 3, name: teamNames[2] },
    { id: 4, name: teamNames[3] },
    { id: 5, name: teamNames[4] },
    { id: 6, name: teamNames[5] },
    { id: 7, name: teamNames[6] },
    { id: 8, name: teamNames[7] },
  ];

  