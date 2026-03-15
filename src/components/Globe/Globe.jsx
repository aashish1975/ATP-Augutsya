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
        altitude: 2.5
    }

    const htmlData = useMemo(() => [
        {
            lat: DELHI_LAT,
            lng: DELHI_LNG,
            size: 8,
            color: '#00ff00'
        }
    ], [])

    // Responsive globe size (adjusted for better visual balance)
    useEffect(() => {
        const updateSize = () => {
            const base = window.innerWidth
            // Even larger size for maximum visual impact
            const size = base < 768 ? base * 0.9 : Math.min(base * 0.6, 650)
            setSize(size)
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    // Initial rotation & POV
    useEffect(() => {
        if (!globeRef.current) return

        globeRef.current.pointOfView(INITIAL_POV, 0)
        
        // Disable mouse interactions but keep rotation
        globeRef.current.controls().enableZoom = false
        globeRef.current.controls().enablePan = false
        globeRef.current.controls().enableRotate = false
    }, [])

    // Separate effect for rotation
    useEffect(() => {
        if (!globeRef.current) return
        
        const timer = setTimeout(() => {
            if (globeRef.current) {
                globeRef.current.controls().autoRotate = true
                globeRef.current.controls().autoRotateSpeed = 0.5
            }
        }, 500)
        
        return () => clearTimeout(timer)
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
