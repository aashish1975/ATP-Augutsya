import Globe from 'react-globe.gl'
import { useEffect, useRef, useState, useMemo } from 'react'
import { cn } from '../../utils/cn'
import './Globe.css'

export default function GlobeComponent({ className }) {
    const globeRef = useRef()
    const containerRef = useRef(null)
    const [size, setSize] = useState(0)

    // Delhi
    const DELHI_LAT = 28.6139
    const DELHI_LNG = 77.2090

    // Initial POV focused on India
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

    // Responsive globe size (larger)
    useEffect(() => {
        const updateSize = () => {
            const base = window.innerWidth
            setSize(base * 0.4) // Larger size to match image
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    // Initial rotation & POV
    useEffect(() => {
        if (!globeRef.current) return

        globeRef.current.pointOfView(INITIAL_POV, 0)
        globeRef.current.controls().autoRotate = true
        globeRef.current.controls().autoRotateSpeed = 0.5
    }, [])

    return (
        <div ref={containerRef} className={cn('globe-wrapper', className)}>
            <Globe
                ref={globeRef}
                width={size}
                height={size}
                backgroundColor="rgba(0,0,0,0)"

                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                showAtmosphere
                atmosphereColor="#ffffff"
                atmosphereAltitude={0.18}

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
