import { useState } from 'react'
import './TrustBadges.css'

const trustMetrics = [
    {
        number: '500+',
        label: 'Businesses Served',
        description: 'Trusted by companies across all sectors'
    },
    {
        number: '10+',
        label: 'Years Experience',
        description: 'Decade of excellence in service delivery'
    },
    {
        number: '98%',
        label: 'Client Satisfaction',
        description: 'Consistently exceeding expectations'
    },
    {
        number: '24/7',
        label: 'Support Available',
        description: 'Always here when you need us'
    }
]

const partnerCategories = [
    {
        title: 'Technology Partners',
        description: 'Leading tech companies we work with',
        partners: [
            { name: 'Microsoft', logo: '🪟', description: 'Azure and Cloud Solutions Partner', color: '#0078D4' },
            { name: 'Google', logo: '🔍', description: 'Workspace and Cloud Services Partner', color: '#4285F4' },
            { name: 'Amazon Web Services', logo: '☁️', description: 'AWS Implementation Partner', color: '#FF9900' },
            { name: 'Oracle', logo: '🗄️', description: 'Database Solutions Partner', color: '#F80000' }
        ]
    },
    {
        title: 'Financial Institutions',
        description: 'Banking and financial service partners',
        partners: [
            { name: 'HDFC Bank', logo: '🏦', description: 'Payment Gateway Partner', color: '#004B8D' },
            { name: 'ICICI Bank', logo: '💳', description: 'Banking Services Partner', color: '#F26722' },
            { name: 'State Bank of India', logo: '🏛️', description: 'Government Services Partner', color: '#00529B' },
            { name: 'PayTM', logo: '💰', description: 'Digital Payments Partner', color: '#00BAF2' }
        ]
    },
    {
        title: 'Government Partnerships',
        description: 'Official collaborations with government bodies',
        partners: [
            { name: 'GSTN', logo: '🧾', description: 'GST Services Provider', color: '#2E7D32' },
            { name: 'Income Tax Department', logo: '📋', description: 'Tax Filing Partner', color: '#1565C0' },
            { name: 'UIDAI', logo: '🆔', description: 'Aadhaar Services Partner', color: '#E53935' },
            { name: 'Ministry of Corporate Affairs', logo: '🏢', description: 'Business Registration Partner', color: '#1976D2' }
        ]
    },
    {
        title: 'Industry Leaders',
        description: 'Collaborations with market leaders',
        partners: [
            { name: 'Tata Group', logo: '🌟', description: 'Enterprise Solutions Partner', color: '#005792' },
            { name: 'Reliance Industries', logo: '🔷', description: 'Digital Transformation Partner', color: '#0F52BA' },
            { name: 'Infosys', logo: '💡', description: 'Technology Consulting Partner', color: '#0076CE' },
            { name: 'Wipro', logo: '🎯', description: 'IT Services Partner', color: '#071D49' }
        ]
    }
]

const testimonials = [
    {
        name: 'Rajesh Sharma',
        company: 'TechStart Solutions',
        position: 'CEO',
        content: 'Augutsya transformed our business operations. Their expertise in technology consulting and implementation is unmatched. Professional, reliable, and results-oriented.',
        rating: 5,
        location: 'Mumbai, Maharashtra'
    },
    {
        name: 'Priya Patel',
        company: 'Global Finance Corp',
        position: 'CFO',
        content: 'The utility services integration saved us countless hours and streamlined our financial processes. Augutsya understands business needs like no other partner we\'ve worked with.',
        rating: 5,
        location: 'Delhi NCR'
    },
    {
        name: 'Amit Kumar',
        company: 'Manufacturing Unit',
        position: 'Operations Head',
        content: 'Outstanding service delivery and support. The team is always responsive and goes above and beyond to ensure our complete satisfaction. Highly recommended!',
        rating: 5,
        location: 'Pune, Maharashtra'
    }
]

const certifications = [
    {
        name: 'ISO 9001:2015',
        issuer: 'International Organization for Standardization',
        description: 'Quality Management Systems Certification',
        icon: '🏆'
    },
    {
        name: 'ISO 27001:2013',
        issuer: 'International Organization for Standardization',
        description: 'Information Security Management Certification',
        icon: '🔒'
    },
    {
        name: 'Microsoft Gold Partner',
        issuer: 'Microsoft Corporation',
        description: 'Cloud Solutions and Services Partnership',
        icon: '☁️'
    },
    {
        name: 'AWS Certified Partner',
        issuer: 'Amazon Web Services',
        description: 'Cloud Infrastructure Expertise Certification',
        icon: '🎯'
    },
    {
        name: 'GST Suvidha Center',
        issuer: 'Government of India',
        description: 'Authorized GST Service Provider Certification',
        icon: '🧾'
    }
]

function TrustBadges() {
    const [activeCategory, setActiveCategory] = useState(0)

    return (
        <div className="trust-badges">
            {/* Hero Section */}
            <section className="trust-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Trusted by <span>Leading Businesses</span> Across India</h1>
                        <p>
                            Partnering with industry leaders, government bodies, and financial institutions 
                            to deliver exceptional service and technology solutions
                        </p>
                        <div className="trust-stats">
                            {trustMetrics.map((metric, index) => (
                                <div key={index} className="stat-item">
                                    <div className="stat-number">{metric.number}</div>
                                    <div className="stat-label">{metric.label}</div>
                                    <p>{metric.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="partners-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Partners</span></h2>
                        <p>Strategic collaborations with India's most trusted organizations</p>
                    </div>
                    
                    <div className="category-tabs">
                        {partnerCategories.map((category, index) => (
                            <button
                                key={index}
                                className={`tab-btn ${activeCategory === index ? 'active' : ''}`}
                                onClick={() => setActiveCategory(index)}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    <div className="partners-content">
                        {partnerCategories[activeCategory].partners.map((partner, index) => (
                            <div key={index} className="partner-card glass-card">
                                <div className="partner-logo" style={{ backgroundColor: partner.color + '15', borderColor: partner.color + '30' }}>
                                    <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                                        {partner.logo}
                                    </span>
                                </div>
                                <div className="partner-info">
                                    <h4 style={{ color: partner.color }}>{partner.name}</h4>
                                    <p>{partner.description}</p>
                                    <div className="partner-badge">
                                        <span className="badge-dot" style={{ backgroundColor: partner.color }}></span>
                                        <span>Verified Partner</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our <span>Partners Say</span></h2>
                        <p>Real experiences from businesses we've helped transform</p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card glass-card">
                                <div className="testimonial-header">
                                    <div className="testimonial-rating">
                                        {'★'.repeat(testimonial.rating)}
                                    </div>
                                    <div className="testimonial-meta">
                                        <h4>{testimonial.name}</h4>
                                        <div className="testimonial-position">
                                            {testimonial.position}
                                        </div>
                                        <div className="testimonial-company">
                                            {testimonial.company}
                                        </div>
                                        <div className="testimonial-location">
                                            📍 {testimonial.location}
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <p>"{testimonial.content}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="certifications-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Certifications</span></h2>
                        <p>Recognitions of our commitment to excellence and compliance</p>
                    </div>
                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-card glass-card">
                                <div className="cert-icon">{cert.icon}</div>
                                <div className="cert-info">
                                    <h4>{cert.name}</h4>
                                    <p>{cert.issuer}</p>
                                    <div className="cert-description">{cert.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Map */}
            <section className="coverage-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Pan India <span>Coverage</span></h2>
                        <p>Serving businesses and individuals across every state and union territory</p>
                    </div>
                    <div className="coverage-map glass-card">
                        <div className="map-content">
                            <div className="coverage-stats">
                                <div className="coverage-item">
                                    <h4>28+ States</h4>
                                    <p>Complete geographical coverage</p>
                                </div>
                                <div className="coverage-item">
                                    <h4>1000+ Cities</h4>
                                    <p>Urban and rural presence</p>
                                </div>
                                <div className="coverage-item">
                                    <h4>50+ Industries</h4>
                                    <p>Multi-sector expertise</p>
                                </div>
                            </div>
                            <div className="coverage-cta">
                                <h3>Check Your Location</h3>
                                <p>Enter your PIN code to verify service availability in your area</p>
                                <div className="pin-check">
                                    <input type="text" placeholder="Enter PIN Code" maxLength="6" />
                                    <button className="btn btn-primary">Check</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="trust-cta">
                <div className="container">
                    <div className="cta-card glass-card">
                        <h2>Join Our Trusted Network</h2>
                        <p>
                            Partner with India's leading businesses and experience the same excellence 
                            that has made us the preferred choice for technology and business solutions
                        </p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary">
                                Become a Partner
                            </button>
                            <button className="btn btn-secondary">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrustBadges
