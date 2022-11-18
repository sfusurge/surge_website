declare export interface EventInfo {

    /**
     * The event title.
     */
    title: string;

    /**
     * The month in which the event takes place.
     */
     month: 'Jan'|'Feb'|'Mar'|'Apr'|'May'|'Jun'|'Jul'|'Aug'|'Sep'|'Oct'|'Nov'|'Dec';

    /**
     * The day of the month in which the event takes place.
     */
    day: '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|'15'|'16'
        |'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31';

    /**
     * The time of the event.
     */
    time: `${string} - ${string}`,

    /**
     * The location of the event.
     */
    location: string,

    /**
     * The filter category which this event belongs under.
     */
    type: 'Socials'|'Workshops'|'TechTalks',

    /**
     * Event links.
     */
    links: {
        register?: string;
        facebook?: string;
        discord?: string;
        location?: string;

        other?: {
            text: string;
            href: string;
        }
    }

    /**
     * If specified, changes the colors of the UpcomingEvent component.
     */
    colors?: {
        primary: string;
        secondary: string;
    }
}

// Default.
declare const upcomingEvents: EventInfo[];
export default upcomingEvents;
