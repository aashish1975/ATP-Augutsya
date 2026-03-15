import { Link } from 'react-router-dom'
import StatsSection from '../../components/StatsSection/StatsSection'
import './Services.css'

const serviceCategories = [
    {
        icon: '💼',
        title: 'Business Consulting',
        description: 'Strategic business guidance and professional services',
        features: [
            { title: 'Legal Consulting', desc: 'Expert legal advice and documentation', icon: '⚖️' },
            { title: 'Accounting Services', desc: 'Comprehensive financial management', icon: '📊' },
            { title: 'Professional Services', desc: 'Business process optimization', icon: '🎯' },
            { title: 'Project Management', desc: 'End-to-end project delivery', icon: '📋' },
        ],
    },
    {
        icon: '💻',
        title: 'Technology Services',
        description: 'Cutting-edge technology solutions',
        features: [
            { title: 'App Development', desc: 'Custom mobile and web applications', icon: '📱' },
            { title: 'Web Development', desc: 'Modern responsive websites', icon: '🌐' },
            { title: 'Software Development', desc: 'Enterprise software solutions', icon: '⚙️' },
            { title: 'Cloud Services', desc: 'Scalable cloud infrastructure', icon: '☁️' },
            { title: 'UI/UX Brand Design', desc: 'Beautiful user experiences', icon: '🎨' },
        ],
    },
    {
        icon: '🏛️',
        title: 'Utility Services',
        description: 'Essential government and financial services',
        features: [
            { title: 'Aadhaar Services', desc: 'Aadhaar card assistance and updates', icon: '🆔' },
            { title: 'PAN Card Services', desc: 'PAN card application and corrections', icon: '💳' },
            { title: 'Voter ID Services', desc: 'Voter ID registration and updates', icon: '🗳️' },
            { title: 'Passport Services', desc: 'Passport application and renewal', icon: '🛂' },
            { title: 'Income Tax Filing', desc: 'ITR preparation and filing', icon: '📑' },
            { title: 'GST Services', desc: 'GST registration and returns', icon: '🧾' },
        ],
    },
    {
        icon: '💳',
        title: 'Payment Services',
        description: 'Secure and convenient payment solutions',
        features: [
            { title: 'PayTM Integration', desc: 'Seamless PayTM payment gateway', icon: '📱' },
            { title: 'PhonePe Integration', desc: 'Quick UPI payment processing', icon: '💸' },
            { title: 'Amazon Pay', desc: 'Amazon payment services', icon: '🛒' },
            { title: 'Airtel Payments', desc: 'Mobile payment solutions', icon: '📶' },
            { title: 'Jio Payment', desc: 'Jio payment integration', icon: '🔵' },
        ],
    },
    {
        icon: '📄',
        title: 'Bill Payment Services',
        description: 'Convenient bill payment solutions',
        features: [
            { title: 'BSES Delhi', desc: 'Delhi electricity bill payment', icon: '⚡' },
            { title: 'BSES Yamuna', desc: 'Yamuna electricity bill payment', icon: '🔌' },
            { title: 'IGL Gas', desc: 'Natural gas bill payment', icon: '🔥' },
            { title: 'TATA Power', desc: 'Mumbai electricity bill payment', icon: '🏭' },
            { title: 'DHBVN', desc: 'Haryana electricity bill payment', icon: '💡' },
        ],
    },
    {
        icon: '✈️',
        title: 'Travel Services',
        description: 'Complete travel assistance',
        features: [
            { title: 'IRCTC Booking', desc: 'Train ticket booking assistance', icon: '🚂' },
            { title: 'Flight Booking', desc: 'Domestic and international flights', icon: '✈️' },
        ],
    },
    {
        icon: '💰',
        title: 'Financial Services',
        description: 'Comprehensive financial solutions',
        features: [
            { title: 'Money Control', desc: 'Personal finance management', icon: '💹' },
            { title: 'Tax Planning', desc: 'Strategic tax optimization', icon: '📈' },
        ],
    },
]

const processSteps = [
    { number: '01', title: 'Discovery', description: 'Understand your needs and goals' },
    { number: '02', title: 'Planning', description: 'Design the optimal solution' },
    { number: '03', title: 'Execution', description: 'Build and implement with precision' },
    { number: '04', title: 'Support', description: 'Ongoing maintenance and optimization' },
]

const pricingPlans = [
    {
        name: 'Basic',
        price: '$99',
        period: '/month',
        features: [
            'Up to 5 hours consultation',
            'Email support',
            'Basic documentation',
            'Monthly reports'
        ],
        featured: false
    },
    {
        name: 'Professional',
        price: '$299',
        period: '/month',
        features: [
            'Up to 20 hours consultation',
            'Priority support',
            'Advanced documentation',
            'Weekly reports',
            'Custom solutions'
        ],
        featured: true
    },
    {
        name: 'Enterprise',
        price: '$599',
        period: '/month',
        features: [
            'Unlimited consultation',
            '24/7 dedicated support',
            'Full documentation',
            'Daily reports',
            'Custom solutions',
            'On-site visits'
        ],
        featured: false
    }
]

function Services() {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon">🚀</span>
                            <span className="badge-text">Professional Services</span>
                        </div>
                        <h1>Our <span>Services</span></h1>
                        <p className="hero-description">
                            Comprehensive technology and business solutions designed to
                            accelerate your growth and streamline operations.
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Services Delivered</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <StatsSection />

            {/* Service Categories */}
            <section className="service-categories">
                <div className="container">
                    <div className="section-header">
                        <h2>Service <span>Categories</span></h2>
                        <p className="section-description">
                            Explore our comprehensive range of professional services
                            tailored to meet your business needs
                        </p>
                    </div>
                    
                    {serviceCategories.map((category, index) => (
                        <div key={index} className="service-category">
                            <div className="category-header">
                                <div className="category-icon-wrapper">
                                    <span className="category-icon">{category.icon}</span>
                                    <div className="icon-glow"></div>
                                </div>
                                <div className="category-content">
                                    <h2>{category.title}</h2>
                                    <p>{category.description}</p>
                                    <div className="category-stats">
                                        <span className="service-count">{category.features.length} Services</span>
                                        <span className="category-arrow">→</span>
                                    </div>
                                </div>
                            </div>
                            <div className="category-features">
                                {category.features.map((feature, i) => (
                                    <div key={i} className="feature-item">
                                        <div className="feature-icon">
                                            <span>{feature.icon}</span>
                                        </div>
                                        <div className="feature-content">
                                            <h4>{feature.title}</h4>
                                            <p>{feature.desc}</p>
                                            <Link to="/contact" className="feature-link">
                                                Learn More
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Choose Your <span>Plan</span></h2>
                        <p>Flexible pricing options for businesses of all sizes</p>
                    </div>
                    <div className="pricing-grid">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className={`pricing-card glass-card ${plan.featured ? 'featured' : ''}`}>
                                {plan.featured && <div className="pricing-badge">Most Popular</div>}
                                <div className="pricing-header">
                                    <h3>{plan.name}</h3>
                                    <div className="pricing-price">
                                        <span className="price">{plan.price}</span>
                                        <span className="period">{plan.period}</span>
                                    </div>
                                </div>
                                <div className="pricing-features">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="pricing-feature">
                                            <div className="feature-check">✓</div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pricing-cta">
                                    <Link to="/contact" className="btn btn-primary">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Process</h2>
                        <p>A proven approach to delivering exceptional results</p>
                    </div>
                    <div className="process-grid">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="process-number">{step.number}</div>
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <div className="cta-badge">
                                <span className="badge-icon">💼</span>
                                <span className="badge-text">Get Started</span>
                            </div>
                            <h2>Ready to Transform Your Business?</h2>
                            <p>
                                Let's discuss how our professional services can help you achieve
                                your business goals and drive growth
                            </p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-primary">
                                    <span>Free Consultation</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link to="/utilities" className="btn btn-secondary">
                                    <span>Explore Utilities</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="cta-visual">
                            <div className="cta-icon">🚀</div>
                            <div className="cta-pattern"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
