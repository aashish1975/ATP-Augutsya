import { useState, useEffect } from 'react'
import './ChatHoursIndicator.css'

function ChatHoursIndicator() {
    const [isOnline, setIsOnline] = useState(false)

    useEffect(() => {
        const checkHours = () => {
            const now = new Date()
            const day = now.getDay()
            const hour = now.getHours()

            // Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
            if (day >= 1 && day <= 5) {
                setIsOnline(hour >= 9 && hour < 18)
            } else if (day === 6) {
                setIsOnline(hour >= 10 && hour < 16)
            } else {
                setIsOnline(false)
            }
        }

        checkHours()
        const interval = setInterval(checkHours, 60000) // Check every minute
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="chat-hours-indicator">
            <div className={`chat-hours-dot ${isOnline ? 'online' : 'offline'}`} />
            <span className="chat-hours-text">
                {isOnline ? 'Team Online' : 'AI Available 24/7'}
            </span>
        </div>
    )
}

export default ChatHoursIndicator
