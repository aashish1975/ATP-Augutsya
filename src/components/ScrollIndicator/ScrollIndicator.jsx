import { useState, useEffect } from 'react'
import './ScrollIndicator.css'

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'clients', label: 'Partners' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'cta', label: 'Contact' }
]

function ScrollIndicator() {
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px', // More forgiving margin
            threshold: 0.1
        }

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        sections.forEach((section) => {
            const element = document.getElementById(section.id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Account for header
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="scroll-indicator">
            <div className="scroll-indicator-track">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={`scroll-dot ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(section.id)}
                        aria-label={`Scroll to ${section.label}`}
                    >
                        <span className="dot-label">{section.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ScrollIndicator
