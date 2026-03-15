import { useTheme } from '../../contexts/ThemeContext'
import './ThemeToggle.css'

function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme()

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
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
