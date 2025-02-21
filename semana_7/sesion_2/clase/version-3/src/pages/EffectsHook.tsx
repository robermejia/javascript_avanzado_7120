import { FC, useEffect, useState } from "react"

const EffectsHook: FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e: PointerEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        };

        window.addEventListener('pointermove', handleMove);
        return () => {
            window.removeEventListener('pointermove', handleMove);
        };
    }, []);


    return (<>
        <h3>Hook de efectos</h3>
        <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%', opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20, top: -20,
            width: 40, height: 40,
        }}
        />
    </>)
}

export default EffectsHook;