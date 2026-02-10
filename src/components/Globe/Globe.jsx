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
    mapBrightness: 2.0, // Increased for fluorescent effect
    baseColor: [1, 1, 1], // Fluorescent white
    markerColor: [0, 1, 0], // Fluorescent green markers
    glowColor: [0.5, 0.5, 0.5], // Brighter glow
    markers: [
        { location: [28.6139, 77.2090], size: 0.2 }, // Delhi

        // Global presence
        { location: [40.7128, -74.006], size: 0.08 }, // New York
        { location: [51.5074, -0.1278], size: 0.07 }, // London
        { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
        { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
    ],
}

export default function Globe({ className, config = GLOBE_CONFIG }) {
    const phiRef = useRef(3.03) // Start from India
    const [width, setWidth] = useState(0)
    const canvasRef = useRef(null)
    const pointerInteracting = useRef(null)
    const pointerInteractionMovement = useRef(0)
    const [r, setR] = useState(0)
    const [zoomScale, setZoomScale] = useState(1)

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
            if (!pointerInteracting.current) {
                const currentPhi = (phiRef.current + r) % (Math.PI * 2)
                const targetPhi = 3.03
                const diff = Math.min(
                    Math.abs(currentPhi - targetPhi),
                    Math.abs(currentPhi - (targetPhi + Math.PI * 2)),
                    Math.abs(currentPhi - (targetPhi - Math.PI * 2))
                )

                // Rotation Speed
                const speed = diff < 0.6 ? 0.002 : 0.005
                phiRef.current += speed

                // Dynamic Zoom
                const zoom = diff < 0.8 ? 1 + (0.3 * (1 - diff / 0.8)) : 1
                setZoomScale(zoom)
            } else {
                setZoomScale(1)
            }

            state.phi = phiRef.current + r
            state.width = width * 2
            state.height = width * 2
        },
        [r, width],
    )

    const onResize = useCallback(() => {
        if (canvasRef.current) {
            setWidth(canvasRef.current.offsetWidth)
        }
    }, [])

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
    }, [config, onRender, onResize])

    return (
        <div
            className={cn('globe-container', className)}
            style={{
                position: 'relative',
                transition: 'transform 0.5s ease-out',
                transform: `scale(${zoomScale})`
            }}
        >
            <canvas
                className="globe-canvas"
                ref={canvasRef}
                style={{
                    filter: zoomScale > 1.1 ? 'drop-shadow(0 0 20px rgba(0,255,0,0.3))' : 'none'
                }}
                onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
            />
        </div>
    )
}
