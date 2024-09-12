import { sendGTMEvent } from "@next/third-parties/google"

interface GoogleTagManagerEvent {
    event_type: string,
    browser_type: string    
}

function sendGoogleTagManagerEvent(data: GoogleTagManagerEvent): void {
    sendGTMEvent(data);
}

export {
    sendGoogleTagManagerEvent
};
export type { GoogleTagManagerEvent };
