/// <reference path="./upcomingEvents.d.ts" />

/** @type {EventInfo[]} */
const upcomingEvent = [
  {
    title: 'Leetcode Workshop',
    type: 'Workshops',

    day: '22',
    month: 'Nov',
    time: '5:30PM - 7:00PM',

    location: 'TASC 9204',
    links: {
      location: 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=TASC19204',
      register: 'https://lu.ma/vso0yu68',
    }
  },

  // EXAMPLE OF AN EVENT:
  /*
  {
    title: 'Event Name',
    type: 'Workshops', // Or 'Socials', 'TechTalks'.

    day: '22',
    month: 'Nov',
    time: '5:30PM - 7:00PM',

    location: 'TASC 9204',
    links: {
      location: 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=TASC19204', // A Google Maps or SFU RoomFinder link. <<OPTIONAL>>

      // Must have AT LEAST one of the below:
      register: 'https://lu.ma/vso0yu68',                                        // A link to register for the event.
      discord:  'https://discord.com/...',                                       // A Discord link. <<WILL BE HIDDEN IF SAME AS REGISTER LINK>>
      facebook: 'https://facebook.com/...',                                      // A Facebook link. <<WILL BE HIDDEN IF SAME AS REGISTER LINK>>

      other: {
        text: "Click Here for Free Spoons",
        href: "https://spoons-r-us.co.uk/",
      },
    },

    colors: { // <<OPTIONAL>>
      primary: "#f00",
      secondary: "#c00",
    },
  },
  */
]

export default upcomingEvent;
