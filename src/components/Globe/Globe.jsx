import createGlobe from 'cobe'
import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'
import './Globe.css'

const GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [1, 1, 1],
    glowColor: [0.4, 0.4, 0.4],
    markers: [
        // India - Main focus
        { location: [28.6139, 77.2090], size: 0.15 }, // Delhi (HQ)
        { location: [19.076, 72.8777], size: 0.1 }, // Mumbai
        { location: [12.9716, 77.5946], size: 0.08 }, // Bangalore
        { location: [13.0827, 80.2707], size: 0.06 }, // Chennai
        { location: [22.5726, 88.3639], size: 0.06 }, // Kolkata

        // Global presence
        { location: [40.7128, -74.006], size: 0.08 }, // New York
        { location: [51.5074, -0.1278], size: 0.07 }, // London
        { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
        { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
        { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
        { location: [52.52, 13.405], size: 0.05 }, // Berlin
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris
        { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
    ],
}

export default function Globe({ className, config = GLOBE_CONFIG }) {
    let phi = 0
    let width = 0
    const canvasRef = useRef(null)
    const pointerInteracting = useRef(null)
    const pointerInteractionMovement = useRef(0)
    const [r, setR] = useState(0)

    const updatePointerInteraction = (value) => {
        pointerInteracting.current = value
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value ? 'grabbing' : 'grab'
        }
    }

    const updateMovement = (clientX) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            setR(delta / 200)
        }
    }

    const onRender = useCallback(
        (state) => {
            if (!pointerInteracting.current) phi += 0.005
            state.phi = phi + r
            state.width = width * 2
            state.height = width * 2
        },
        [r],
    )

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)
        onResize()

        const globe = createGlobe(canvasRef.current, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        })

        setTimeout(() => {
            if (canvasRef.current) {
                canvasRef.current.style.opacity = '1'
            }
        }, 100)

        return () => {
            globe.destroy()
            window.removeEventListener('resize', onResize)
        }
    }, [config, onRender])

    return (
        <div className={cn('globe-container', className)}>
            <canvas
                className="globe-canvas"
                ref={canvasRef}
                onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
            />
        </div>
    )
}
