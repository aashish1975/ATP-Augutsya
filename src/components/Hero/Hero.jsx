import { Link } from 'react-router-dom'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import Globe from '../Globe/Globe'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            {/* Background Effects */}
            <div className="hero-bg">
                <ParticleBackground count={60} />
                <div className="glow-orb primary"></div>
                <div className="glow-orb accent"></div>
                <div className="hero-grid-pattern"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    {/* Left Side - Text Content */}
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="hero-badge-dot"></span>
                            <span>Techno-Commercial Consulting</span>
                        </div>

                        <h1 className="hero-title">
                            <span>We Build</span>
                            <span>Ship & <span className="highlight">Scale</span></span>
                        </h1>

                        <p className="hero-description">
                            Your search for a techno-commercial consultant ends here.
                            We build useful tech that feels effortless.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Get Consultation
                            </Link>
                            <Link to="/services" className="btn btn-secondary">
                                Explore Services
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-value">50+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">98%</div>
                                <div className="stat-label">On-time</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">24/7</div>
                                <div className="stat-label">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Interactive Globe */}
                    <div className="hero-globe">
                        <Globe />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
