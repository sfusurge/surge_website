// @ts-ignore
import React, { createContext, useContext, useState, useEffect } from "react";

export interface EventInfo<D extends string|Date = Date> {

    /**
     * The event title.
     */
    title: string;

    /**
     * The event start date.
     */
    start: D;

    /**
     * The event end date.
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

/**
 * Events are still loading.
 */
export const EventsLoading = Symbol("Events Loading");

/**
 * Events are loaded.
 */
 export const EventsLoaded = Symbol("Events Loaded");

/**
 * Failed to load events.
 */
export const EventsError = Symbol("Events Failed to Load");

// React context.
type EventsStatus = {events: EventInfo<Date>[], status: typeof EventsLoading | typeof EventsError | typeof EventsLoaded};
const context = createContext<EventsStatus>({events: [], status: EventsLoading});

/**
 * A React context provider that provides upcoming events to the {@link useEvents} hook.
 *
 * @param props
 * @returns
 */
export function EventsProvider(props: React.PropsWithChildren<{}>) {
    const ENDPOINT = '/.netlify/functions/events';
    const [state, setState] = useState<EventsStatus>({events: [], status: EventsLoading});

    function parseDates(events: EventInfo<string>[]): EventInfo<Date>[] {
        return events.map(event => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
        }));
    }

    useEffect(() => {
        async function load() {
            const response = await fetch(ENDPOINT);
            if (response.status === 200) {
                setState({
                    events: parseDates(await response.json()),
                    status: EventsLoaded
                });
            } else {
                setState((state: any) => ({
                    ...state,
                    status: EventsError,
                }));
                throw new Error(`${response.status} ${response.statusText}`);
            }
        }

        load().catch((ex) => {
            console.error("Unable to fetch events.\n", ex);
        });
    }, []);

    return <context.Provider value={state}>
        {props.children}
    </context.Provider>
}

// React hooks.

/**
 * React hook to fetch the upcoming events.
 * @returns The upcoming events.
 */
export function useEvents(): EventsStatus {
    return useContext(context);
}
