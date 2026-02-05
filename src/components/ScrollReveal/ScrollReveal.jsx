import { useEffect, useRef, useState } from 'react'
import './ScrollReveal.css'

function ScrollReveal({ children, className = '', animation = 'default', threshold = 0.1 }) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [threshold])

    const animationClass = animation === 'default' ? '' : animation

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    )
}

export function ScrollRevealStagger({ children, className = '' }) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`scroll-reveal-stagger ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    )
}

export default ScrollReveal
