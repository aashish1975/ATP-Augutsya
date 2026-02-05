import { useState, useEffect } from 'react'
import './CookieBanner.css'

function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        setIsVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined')
        setIsVisible(false)
    }

    return (
        <div className={`cookie-banner ${isVisible ? 'visible' : ''}`}>
            <div className="cookie-content">
                <div className="cookie-text">
                    <h4>🍪 We use cookies</h4>
                    <p>
                        We use cookies to enhance your browsing experience and analyze our traffic.
                        By clicking "Accept", you consent to our use of cookies.{' '}
                        <a href="/privacy">Learn more</a>
                    </p>
                </div>
                <div className="cookie-actions">
                    <button className="btn btn-secondary" onClick={handleDecline}>
                        Decline
                    </button>
                    <button className="btn btn-primary" onClick={handleAccept}>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CookieBanner
