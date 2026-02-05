import { useState, useEffect } from 'react'
import './ThemeToggle.css'

function ThemeToggle() {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved) {
            setTheme(saved)
            document.documentElement.setAttribute('data-theme', saved)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <div className="theme-toggle-track">
                <span className="theme-toggle-icon sun">☀️</span>
                <span className="theme-toggle-icon moon">🌙</span>
            </div>
            <div className="theme-toggle-thumb" />
        </button>
    )
}

export default ThemeToggle
