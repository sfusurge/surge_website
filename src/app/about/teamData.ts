type Team = {
    id: number;
    name: string;
  };

  const teamNames = [
    "Directors",
    "Tech",
    "Product",
    "Finance",
    "HR",
    "ER",
    "Design",
    "Logistics",
    "Social Media"
  ] as const;

  type teamName = typeof teamNames[number]

  type teamMember = {
    id: number;
    team: teamName
    name: string;
    title: string;
    description: string;
    photo:string;
  };

  export const teams: Team[] = [
    { id: 1, name: teamNames[0] },
    { id: 2, name: teamNames[1] },
    { id: 3, name: teamNames[2] },
    { id: 4, name: teamNames[3] },
    { id: 5, name: teamNames[4] },
    { id: 6, name: teamNames[5] },
    { id: 7, name: teamNames[6] },
    { id: 8, name: teamNames[7] },
    { id: 9, name: teamNames[8] }
  ];

  export const teamMembers: teamMember[] = [
    {
      id: 1,
      team: "Directors",
      name: "happy gilmore",
      title: "Director of Tech",
      description: "nutz",
      photo:"url"
    },
    {
      id: 2,
      team: "Tech",
      name: "Michael scott",
      title: "regional manager",
      description: "nutz",
      photo:"url"
    },
    {
      id: 3,
      team: "Tech",
      name: "Stanley hudson",
      title: "programmer",
      description: "nutz",
      photo:"url"
    },
    {
      id: 4,
      team: "Design",
      name: "Adam frost",
      title: "deez",
      description: "nutz",
      photo:"url"
    },
    {
      id: 5,
      team: "Design",
      name: "coffee man",
      title: "deez",
      description: "nutz",
      photo:"url"
    },
    {
      id: 6,
      team: "Logistics",
      name: "Bubble man",
      title: "deez",
      description: "nutz",
      photo:"url"
    },
    {
      id: 7,
      team: "Logistics",
      name: "Table man",
      title: "deez",
      description: "nutz",
      photo:"url"
    },
    {
      id: 8,
      team: "Logistics",
      name: "XDDDD",
      title: "deez",
      description: "nutz",
      photo:"url"
    },
    {
      id: 9,
      team: "Logistics",
      name: "Dennis Limbo",
      title: "deez",
      description: "nutz",
      photo:"url"
    },
  ];

