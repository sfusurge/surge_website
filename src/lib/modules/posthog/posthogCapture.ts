'use client'
import posthog from "posthog-js";
import { MouseEvent } from "../analytics/MouseInteractions";

function sendPosthogEvent(e: MouseEvent) {
    const {event_type, ...event} = {...e}
    posthog.capture(event_type, {...event})
}