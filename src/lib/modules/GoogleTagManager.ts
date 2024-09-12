
import { sendGTMEvent } from "@next/third-parties/google";
import { GoogleTagManagerEvent } from "../types/GoogleTagManagerEvent";

function sendGoogleTagManagerEvent(data: GoogleTagManagerEvent): void {
    sendGTMEvent(data);
}

export {
    sendGoogleTagManagerEvent
}