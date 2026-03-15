import { Link } from 'react-router-dom'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import Globe from '../Globe/Globe'
import './HeroNew.css'

function HeroNew() {
    return (
        <section className="hero-new">
            {/* Background Effects */}
            <div className="hero-new-bg">
                <ParticleBackground count={80} />
                <div className="glow-orb primary"></div>
                <div className="glow-orb secondary"></div>
                <div className="glow-orb accent"></div>
                <div className="hero-new-grid"></div>
            </div>

            <div className="hero-new-container">
                <div className="hero-new-content">
                    {/* Left Side - Text Content */}
                    <div className="hero-new-text">
                        <div className="hero-new-badge">
                            <span className="hero-new-badge-dot"></span>
                            <span>Techno-Commercial Consulting</span>
                        </div>

                        <h1 className="hero-new-title">
                            <span className="hero-new-title-line">We Build</span>
                            <span className="hero-new-title-line">
                                Ship & <span className="highlight">Scale</span>
                            </span>
                        </h1>

                        <p className="hero-new-description">
                            Your search for a techno-commercial consultant ends here.
                            We build useful tech that feels effortless.
                        </p>

                        <div className="hero-new-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Get Consultation
                            </Link>
                            <Link to="/services" className="btn btn-secondary">
                                Explore Services
                            </Link>
                        </div>

                        <div className="hero-new-stats">
                            <div className="hero-new-stat">
                                <div className="hero-new-stat-value">50+</div>
                                <div className="hero-new-stat-label">Projects</div>
                            </div>
                            <div className="hero-new-stat">
                                <div className="hero-new-stat-value">98%</div>
                                <div className="hero-new-stat-label">On-time</div>
                            </div>
                            <div className="hero-new-stat">
                                <div className="hero-new-stat-value">24/7</div>
                                <div className="hero-new-stat-label">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Interactive Globe */}
                    <div className="hero-new-globe-wrapper">
                        <div className="hero-new-globe-container">
                            <Globe />
                        </div>
                        <div className="hero-new-globe-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroNew
