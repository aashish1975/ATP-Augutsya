import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './PageTransition.css'

function PageTransition({ children }) {
    const location = useLocation()
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        setIsTransitioning(true)
        const timer = setTimeout(() => {
            setIsTransitioning(false)
        }, 50)

        return () => clearTimeout(timer)
    }, [location])

    return (
        <div className={`page-transition-wrapper ${isTransitioning ? '' : 'active'}`}>
            {children}
        </div>
    )
}

export default PageTransition
