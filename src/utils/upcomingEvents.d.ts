export declare interface EventInfo<D extends string|Date = Date> {

    /**
     * The event title.
     */
    title: string;

    /**
     * The start date.
     */
    start: D;

    /**
     * The end date.
     */
    end: D;

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
