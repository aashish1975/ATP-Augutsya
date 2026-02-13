import Globe from 'react-globe.gl'
import { useEffect, useRef, useState, useMemo } from 'react'
import { cn } from '../../utils/cn'
import './Globe.css'

export default function GlobeComponent({ className }) {
    const globeRef = useRef()
    const [width, setWidth] = useState(0)
    const containerRef = useRef(null)

    // Delhi location
    const DELHI_LAT = 28.6139
    const DELHI_LNG = 77.2090

    // India point of view
    const INITIAL_POV = {
        lat: 20,
        lng: 77,
        altitude: 1.6
    }

    const htmlData = useMemo(() => [
        {
            lat: DELHI_LAT,
            lng: DELHI_LNG,
            size: 8,
            color: '#00ff00'
        }
    ], [])

    
    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.offsetWidth)
        }

        const handleResize = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.offsetWidth)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (globeRef.current) {
            // Set initial POV to India
            globeRef.current.pointOfView(INITIAL_POV, 0)

            // Auto-rotation logic
            globeRef.current.controls().autoRotate = true
            globeRef.current.controls().autoRotateSpeed = 0.5
        }
    }, [])

    return (
        <div ref={containerRef} className={cn('globe-container', className)}>
            <Globe
                ref={globeRef}
                width={width}
                height={width}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                showAtmosphere={true}
                atmosphereColor="#ffffff"
                atmosphereAltitude={0.15}

                htmlElementsData={htmlData}
                htmlElement={(d) => {
                    const el = document.createElement('div')
                    el.style.width = `${d.size}px`
                    el.style.height = `${d.size}px`
                    el.style.borderRadius = '50%'
                    el.style.backgroundColor = d.color
                    el.style.boxShadow = `0 0 8px ${d.color}, 0 0 20px ${d.color}`
                    el.style.pointerEvents = 'none'
                    return el
                }}
            />
        </div>
    )
}
