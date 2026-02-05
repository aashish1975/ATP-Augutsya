import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/images/logo.png'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src={Logo} alt="AUGUTSYA" className="logo-img" />
                </Link>

                <button
                    className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/utilities"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Utilities
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/calculators"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                AI Tools
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-actions">
                        <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
                            Get Started
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
