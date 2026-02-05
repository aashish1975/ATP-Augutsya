import { Link } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import FAQ from '../../components/FAQ/FAQ'
import './Pricing.css'

const pricingPlans = [
    {
        tier: 'Starter',
        icon: '🚀',
        price: '₹15,000',
        period: '/project',
        description: 'Perfect for small businesses and startups',
        features: [
            'Single page website',
            'Mobile responsive design',
            'Basic SEO setup',
            '3 rounds of revisions',
            '1 month support',
            'Source code delivery',
        ],
        cta: 'Get Started',
        featured: false,
    },
    {
        tier: 'Professional',
        icon: '⭐',
        price: '₹45,000',
        period: '/project',
        description: 'Ideal for growing businesses',
        features: [
            'Multi-page website (up to 10)',
            'Custom UI/UX design',
            'Advanced SEO optimization',
            'CMS integration',
            'Unlimited revisions',
            '3 months support',
            'Analytics setup',
            'Performance optimization',
        ],
        cta: 'Most Popular',
        featured: true,
    },
    {
        tier: 'Enterprise',
        icon: '🏢',
        price: 'Custom',
        period: 'pricing',
        description: 'For large-scale enterprise solutions',
        features: [
            'Custom web applications',
            'Cloud infrastructure setup',
            'API development & integration',
            'Dedicated project manager',
            '24/7 priority support',
            'SLA guarantees',
            'Security audits',
            'Ongoing maintenance',
        ],
        cta: 'Contact Us',
        featured: false,
    },
]

function Pricing() {
    return (
        <div className="pricing-page">
            <section className="pricing-header">
                <div className="container">
                    <ScrollReveal>
                        <h1>Simple, Transparent <span>Pricing</span></h1>
                        <p>Choose the plan that fits your needs. No hidden fees, no surprises.</p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="pricing-section">
                <div className="container">
                    <div className="pricing-grid">
                        {pricingPlans.map((plan, index) => (
                            <ScrollReveal key={index}>
                                <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                                    {plan.featured && <div className="pricing-badge">Most Popular</div>}

                                    <div className="pricing-card-header">
                                        <div className="pricing-icon">{plan.icon}</div>
                                        <h3 className="pricing-tier">{plan.tier}</h3>
                                        <div className="pricing-price">
                                            {plan.price}
                                            <span> {plan.period}</span>
                                        </div>
                                        <p className="pricing-description">{plan.description}</p>
                                    </div>

                                    <ul className="pricing-features">
                                        {plan.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>

                                    <Link
                                        to="/contact"
                                        className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                                    >
                                        {plan.cta}
                                    </Link>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="pricing-note">
                        <p>
                            💡 All prices are starting prices and may vary based on specific requirements.
                            Contact us for a detailed quote tailored to your project.
                        </p>
                    </div>
                </div>
            </section>

            <FAQ />
        </div>
    )
}

export default Pricing
