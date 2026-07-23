import {useEffect, useRef} from "react";
import Phaser from "phaser";
import {GameScene} from "../scenes/GameScene.ts";

export const FableTown = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (!containerRef.current) return;
        const container: HTMLDivElement = containerRef.current;

        const world = new Phaser.Game({
            type: Phaser.AUTO,
            parent: container,
            width: 1024,
            height: 576,
            scene: [GameScene]
        })

        return () => {
            world.destroy(true);
        };
    }, [])
    return (
        <div className="w-full h-screen" ref={containerRef}></div>
    );
};