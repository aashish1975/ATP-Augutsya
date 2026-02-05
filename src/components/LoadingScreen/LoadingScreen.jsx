import { useState, useEffect } from 'react'
import './LoadingScreen.css'
import Logo from '../../assets/images/logo.png'

function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Minimum display time for loading screen
        const minLoadTime = 1500
        const startTime = Date.now()

        const handleLoad = () => {
            const elapsed = Date.now() - startTime
            const remaining = Math.max(0, minLoadTime - elapsed)

            setTimeout(() => {
                setIsLoading(false)
            }, remaining)
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
            return () => window.removeEventListener('load', handleLoad)
        }
    }, [])

    return (
        <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
            <img src={Logo} alt="Augutsya" className="loading-logo" />
            <div className="loading-text">Augutsya</div>
            <div className="loading-bar">
                <div className="loading-bar-progress" />
            </div>
        </div>
    )
}

export default LoadingScreen
