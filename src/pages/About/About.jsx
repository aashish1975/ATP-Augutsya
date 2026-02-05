import { Link } from 'react-router-dom'
import TeamSection from '../../components/TeamSection/TeamSection'
import './About.css'

const values = [
    {
        icon: '🎯',
        title: 'Excellence',
        description: 'We strive for excellence in every project we undertake.',
    },
    {
        icon: '🤝',
        title: 'Partnership',
        description: 'We work as partners, not just service providers.',
    },
    {
        icon: '💡',
        title: 'Innovation',
        description: 'We embrace cutting-edge technologies and creative solutions.',
    },
    {
        icon: '🔒',
        title: 'Integrity',
        description: 'We maintain transparency and honesty in all our dealings.',
    },
    {
        icon: '⚡',
        title: 'Agility',
        description: 'We adapt quickly to changing requirements and markets.',
    },
    {
        icon: '🌟',
        title: 'Quality',
        description: 'We never compromise on the quality of our deliverables.',
    },
]

function About() {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="about-header">
                <div className="container">
                    <h1>About <span>Augutsya</span></h1>
                    <p>
                        Building useful tech that feels effortless. Your trusted
                        techno-commercial consulting partner.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-content">
                            <h2>Our <span>Mission</span></h2>
                            <p>
                                At Augutsya, we believe technology should empower businesses,
                                not complicate them. Our mission is to bridge the gap between
                                complex technology solutions and real business outcomes.
                            </p>
                            <p>
                                We align engineering excellence with business goals to create
                                solutions that are not just technically sound but also drive
                                tangible value for our clients.
                            </p>
                        </div>
                        <div className="mission-visual">
                            <div className="mission-icon">🚀</div>
                            <h3>Building the Future</h3>
                            <p>Technology that empowers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <TeamSection />

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-content">
                        <h2>Our <span>Story</span></h2>
                        <div className="story-text">
                            <p>
                                Augutsya was founded with a simple yet powerful vision: to be
                                the techno-commercial consulting partner that businesses deserve.
                                We noticed a gap in the market – companies were either getting
                                great technology with poor business alignment, or good business
                                advice without technical depth.
                            </p>
                            <p>
                                We set out to change that. Our team combines deep technical
                                expertise with sharp business acumen. We don&apos;t just build
                                solutions; we architect experiences that drive growth, efficiency,
                                and competitive advantage.
                            </p>
                            <p>
                                From IT consulting and software development to taxation services
                                and legal arbitrations, we&apos;ve expanded our capabilities while
                                maintaining our core commitment: delivering useful tech that
                                feels effortless. Today, we serve clients across India, helping
                                them navigate the digital landscape with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <h2>Ready to Work Together?</h2>
                    <p>
                        Let&apos;s discuss how we can help transform your business with
                        the right technology solutions.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Start a Conversation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About
