"use client";

import { useEffect, useRef } from "react";
import style from "./Starbackground.module.css";
import { StarRenderer } from "./StarRenderer";

export default function Starbackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const renderer = useRef<StarRenderer | null>(null);
    useEffect(() => {
        console.log('what the');
        
        if (canvasRef.current) {
            // only make the renderer once
            renderer.current = new StarRenderer(canvasRef.current);
        }

        return ()=>{
            renderer.current?.cleanUp();
        };
    }, []);

    return (
        <div className={style.starfieldRoot}>
            <canvas ref={canvasRef} className={style.starfieldCanvas}></canvas>
            <h1>BELH</h1>
        </div>
    );
}
