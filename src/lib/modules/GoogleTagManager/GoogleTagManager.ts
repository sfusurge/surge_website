/*
    This module provides functions that send data to and from Google Tag Manager. 
    ENSURE that all data sent and collected is PIPEDA compliant: https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda_brief/#information
    and also PIPA (British Columbia) compliant: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/03063_01
*/

import { sendGTMEvent } from "@next/third-parties/google";
import { GoogleTagManagerEvent, SystemInformation } from "./types/GoogleTagManagerTypes";

function sendGoogleTagManagerEvent(event_data: GoogleTagManagerEvent): void {
    sendGTMEvent(event_data);
}

function sendGoogleTagManagerSystemInfo(system_info: SystemInformation) {
    sendGTMEvent(system_info)
}

export {
    sendGoogleTagManagerEvent
};
