"use client"

import { useState } from "react"

interface ButtonProps {
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const [mouseOverTime, setMouseOverTime] = useState<number>(0)

    // const handleClick = () => {
    //     const event_data: GoogleTagManagerEvent = {
    //         element_type: "button",
    //         interaction_type: InteractionType.CLICK
    //     }
    //     console.log(event_data)
    //     sendGoogleTagManagerEvent(event_data)
    // }

    // const handleMouseOver = () => {
    //     setMouseOverTime(Date.now())
    //     const event_data: GoogleTagManagerEvent = {
    //         element_type: "button",
    //         interaction_type: InteractionType.MOUSE_OVER
    //     }
    //     console.log(event_data)
    //     sendGoogleTagManagerEvent(event_data)
    // }

    // const handleMouseOut = () => {
    //     const elapsedTime = new Date(Date.now() - mouseOverTime).getSeconds()
    //     setMouseOverTime(elapsedTime)
    //     const event_data: GoogleTagManagerEvent = {
    //         element_type: "button",
    //         interaction_type: InteractionType.MOUSE_OUT,
    //         elapsed_time: mouseOverTime
    //     }
    //     sendGoogleTagManagerEvent(event_data)
    // }

    return (
    <button 
        // onClick={handleClick}
        // onMouseEnter={handleMouseOver}
        // onMouseLeave={handleMouseOut}
        className="button-link bg-brand-primary hover:bg-brand-primary-hover text-primary py-2 my-8 px-6 rounded-custom-radius transition mb-8"
    >
        {props.children}
    </button>
    )
}