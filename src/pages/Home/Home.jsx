import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import ClientLogos from '../../components/ClientLogos/ClientLogos'
import Testimonials from '../../components/Testimonials/Testimonials'
import FAQ from '../../components/FAQ/FAQ'
import ScrollIndicator from '../../components/ScrollIndicator/ScrollIndicator'
import './Home.css'

const services = [
    {
        icon: '💻',
        title: 'Web Development',
        description: 'Responsive websites and web apps with modern frameworks.',
        features: ['React/Next.js', 'Custom CMS', 'SEO-first builds'],
    },
    {
        icon: '☁️',
        title: 'Cloud Solutions',
        description: 'AWS, Azure and GCP services for scalability and cost-efficiency.',
        features: ['Infrastructure setup', 'Migration', 'Optimization'],
    },
    {
        icon: '📊',
        title: 'Data Analytics',
        description: 'Data pipelines, visualization, and business intelligence.',
        features: ['Real-time dashboards', 'ML insights', 'Data warehousing'],
    },
    {
        icon: '🔒',
        title: 'Cybersecurity',
        description: 'Protect your business with comprehensive security solutions.',
        features: ['Threat protection', 'Compliance', 'Security audits'],
    },
    {
        icon: '🎯',
        title: 'IT Consulting',
        description: 'Strategic technology guidance for business growth.',
        features: ['Tech assessment', 'Roadmap planning', 'Digital transformation'],
    },
    {
        icon: '🛠️',
        title: 'Support & Maintenance',
        description: '24/7 support with guaranteed SLAs and quick resolution.',
        features: ['Round-the-clock support', 'Proactive monitoring', 'Quick fixes'],
    },
]

function Home() {
    return (
        <div className="home-page">
            <ScrollIndicator />

            <div id="hero">
                <Hero />
            </div>

            {/* Client Logos */}
            <section id="clients">
                <ClientLogos />
            </section>

            {/* Services Section */}
            <section id="services" className="home-services">
                <div className="container">
                    <div className="services-header">
                        <h2>Our <span>Services</span></h2>
                        <p>
                            We provide comprehensive technology and business solutions
                            tailored to your unique needs.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                                featured={index === 0}
                            />
                        ))}
                    </div>

                    <div className="services-cta">
                        <Link to="/services" className="btn btn-outline">
                            View All Services
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials">
                <Testimonials />
            </section>

            {/* FAQ Section */}
            <section id="faq">
                <FAQ />
            </section>

            {/* CTA Section */}
            <section id="cta" className="home-cta">
                <div className="cta-container">
                    <div className="cta-card">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>
                            Let&apos;s discuss how we can help you achieve your technology
                            and business goals.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Get Free Consultation
                            </Link>
                            <Link to="/pricing" className="btn btn-secondary">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
