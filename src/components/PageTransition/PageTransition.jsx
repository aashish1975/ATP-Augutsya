import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './PageTransition.css'

function PageTransition({ children }) {
    const location = useLocation()
    const [displayChildren, setDisplayChildren] = useState(children)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        setIsTransitioning(true)
        const timer = setTimeout(() => {
            setDisplayChildren(children)
            setIsTransitioning(false)
        }, 50)

        return () => clearTimeout(timer)
    }, [location, children])

    return (
        <div className={`page-transition-wrapper ${isTransitioning ? '' : 'active'}`}>
            {displayChildren}
        </div>
    )
}

export default PageTransition
