import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import './Portfolio.css'

const caseStudies = [
    {
        id: 1,
        icon: '🛒',
        category: 'E-commerce',
        client: 'FashionFirst India',
        title: 'Complete E-commerce Platform Transformation',
        description: 'Built a scalable e-commerce platform handling 50,000+ daily orders with integrated inventory management, payment processing, and AI-powered recommendations.',
        stats: [
            { value: '300%', label: 'Revenue Growth' },
            { value: '50K+', label: 'Daily Orders' },
            { value: '99.9%', label: 'Uptime' },
        ],
        technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
    },
    {
        id: 2,
        icon: '🏦',
        category: 'FinTech',
        client: 'SecurePay Solutions',
        title: 'Digital Banking Mobile Application',
        description: 'Developed a secure mobile banking app with biometric authentication, real-time transactions, and investment tracking for over 100,000 users.',
        stats: [
            { value: '100K+', label: 'Active Users' },
            { value: '₹500Cr', label: 'Transactions' },
            { value: '4.8★', label: 'App Rating' },
        ],
        technologies: ['React Native', 'Python', 'Azure', 'MongoDB'],
    },
    {
        id: 3,
        icon: '🏥',
        category: 'Healthcare',
        client: 'MedConnect Plus',
        title: 'Telemedicine Platform Development',
        description: 'Created a comprehensive telemedicine platform connecting patients with doctors, featuring video consultations, prescription management, and health records.',
        stats: [
            { value: '25K+', label: 'Consultations' },
            { value: '500+', label: 'Doctors' },
            { value: '40%', label: 'Cost Reduction' },
        ],
        technologies: ['Vue.js', 'Django', 'WebRTC', 'GCP'],
    },
    {
        id: 4,
        icon: '📊',
        category: 'Analytics',
        client: 'DataDrive Enterprise',
        title: 'Business Intelligence Dashboard Suite',
        description: 'Implemented a real-time analytics platform providing actionable insights, predictive analytics, and automated reporting for enterprise clients.',
        stats: [
            { value: '60%', label: 'Faster Decisions' },
            { value: '1M+', label: 'Data Points/Day' },
            { value: '15+', label: 'Integrations' },
        ],
        technologies: ['Power BI', 'Python', 'Snowflake', 'Apache Kafka'],
    },
]

function Portfolio() {
    return (
        <div className="portfolio-page">
            <section className="portfolio-header">
                <div className="container">
                    <ScrollReveal>
                        <h1>Our Portfolio</h1>
                        <p>Explore our successful projects and case studies across various industries</p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="portfolio-content">
                <div className="container">
                    <div className="portfolio-grid">
                        {caseStudies.map((study, index) => (
                            <ScrollReveal key={study.id}>
                                <article className="case-study-card">
                                    <div className="case-study-image">{study.icon}</div>
                                    <div className="case-study-content">
                                        <span className="case-study-tag">
                                            {study.category} • {study.client}
                                        </span>
                                        <h3>{study.title}</h3>
                                        <p>{study.description}</p>
                                        <div className="case-study-stats">
                                            {study.stats.map((stat, i) => (
                                                <div key={i} className="case-study-stat">
                                                    <div className="case-study-stat-value">{stat.value}</div>
                                                    <div className="case-study-stat-label">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="case-study-tech">
                                            {study.technologies.map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
