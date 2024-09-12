"use client"

import { GoogleTagManagerEvent } from "@/lib/types/GoogleTagManagerEvent";
import { sendGoogleTagManagerEvent } from "@/lib/modules/GoogleTagManager";
interface ButtonProps {
    children: React.ReactNode
    gtmEvent?: GoogleTagManagerEvent
}

export default function Button(props: ButtonProps) {
    return (
    <button 
        onClick={() => props.gtmEvent ? sendGoogleTagManagerEvent(props.gtmEvent) : null} 
        className="button-link bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 my-8 px-6 rounded-custom-radius transition mb-8"
    >
        {props.children}
    </button>
    )
}