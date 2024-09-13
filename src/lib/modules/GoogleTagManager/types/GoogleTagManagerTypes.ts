import { InteractionType } from "./InteractionType"

interface SystemInformation {
    browser_type: string,
    device_type: string,
    os_type: string,
    screen_resolution: string,
}

interface GoogleTagManagerEvent {
    element_type: React.ElementType,
    interaction_type: InteractionType,
    elapsed_time?: number 
}

export type {
    GoogleTagManagerEvent,
    SystemInformation
}