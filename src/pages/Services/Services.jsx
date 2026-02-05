import StatsSection from '../../components/StatsSection/StatsSection'
import './Services.css'

const serviceCategories = [
    {
        icon: '🏢',
        title: 'IT Consulting',
        description: 'Strategic technology guidance for your business',
        features: [
            { title: 'DC Design & Migration', desc: 'Data center architecture and cloud migration' },
            { title: 'Network Architecture', desc: 'Secure and scalable network design' },
            { title: 'Lifecycle Management', desc: 'End-to-end IT asset management' },
            { title: 'Digital Transformation', desc: 'Modernize your technology stack' },
        ],
    },
    {
        icon: '💻',
        title: 'Software Development',
        description: 'Custom software solutions for your business',
        features: [
            { title: 'ERP Modules', desc: 'Enterprise resource planning systems' },
            { title: 'Business Process Automation', desc: 'Streamline workflows and operations' },
            { title: 'API Development', desc: 'RESTful and GraphQL APIs' },
            { title: 'Legacy Modernization', desc: 'Update and migrate legacy systems' },
        ],
    },
    {
        icon: '📱',
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications',
        features: [
            { title: 'Native iOS & Android', desc: 'Swift, Kotlin, and platform-specific apps' },
            { title: 'Cross-platform', desc: 'React Native and Flutter development' },
            { title: 'Secure Authentication', desc: 'Biometric and OAuth integration' },
            { title: 'Offline-first UX', desc: 'Apps that work without connectivity' },
        ],
    },
    {
        icon: '🎨',
        title: 'Custom Web Dev & UI/UX',
        description: 'Beautiful, user-centered web experiences',
        features: [
            { title: 'Design Systems', desc: 'Scalable component libraries' },
            { title: 'Headless CMS', desc: 'Flexible content management' },
            { title: 'SEO-first Builds', desc: 'Optimized for search engines' },
            { title: 'Accessibility', desc: 'WCAG compliant interfaces' },
        ],
    },
    {
        icon: '☁️',
        title: 'Cloud & DevOps',
        description: 'Modern infrastructure and deployment practices',
        features: [
            { title: 'Infrastructure as Code', desc: 'Terraform and CloudFormation' },
            { title: 'Container Orchestration', desc: 'Kubernetes and Docker' },
            { title: 'CI/CD Pipelines', desc: 'Automated testing and deployment' },
            { title: 'Observability', desc: 'Monitoring, logging, and alerting' },
        ],
    },
    {
        icon: '📞',
        title: 'KPO/BPO Operations',
        description: 'Knowledge and business process outsourcing',
        features: [
            { title: 'Lead Generation', desc: 'Qualified lead acquisition' },
            { title: 'Market Research', desc: 'Industry and competitor analysis' },
            { title: 'Support Call Centers', desc: '24/7 customer support' },
            { title: 'Data Entry & Processing', desc: 'Accurate data management' },
        ],
    },
    {
        icon: '⚖️',
        title: 'Legal & Financial Arbitrations',
        description: 'Professional dispute resolution services',
        features: [
            { title: 'Commercial Disputes', desc: 'Business conflict resolution' },
            { title: 'Contract Analysis', desc: 'Legal document review' },
            { title: 'Documentation Support', desc: 'Legal paperwork assistance' },
            { title: 'Mediation Services', desc: 'Neutral third-party arbitration' },
        ],
    },
    {
        icon: '📋',
        title: 'Commercial & Personal Taxation',
        description: 'Comprehensive tax services',
        features: [
            { title: 'GST Registration', desc: 'Business GST setup and compliance' },
            { title: 'Return Filing', desc: 'Timely GST and income tax filings' },
            { title: 'Income Tax Planning', desc: 'Strategic tax optimization' },
            { title: 'ITR Preparation', desc: 'Personal and business ITR' },
        ],
    },
]

const processSteps = [
    { number: '01', title: 'Discovery', description: 'Understand your needs and goals' },
    { number: '02', title: 'Planning', description: 'Design the optimal solution' },
    { number: '03', title: 'Execution', description: 'Build and implement with precision' },
    { number: '04', title: 'Support', description: 'Ongoing maintenance and optimization' },
]

function Services() {
    return (
        <div className="services-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Our <span>Services</span></h1>
                    <p>
                        Comprehensive technology and business solutions designed to
                        accelerate your growth and streamline operations.
                    </p>
                </div>
            </section>

            <StatsSection />

            {/* Service Categories */}
            <section className="service-categories">
                <div className="container">
                    {serviceCategories.map((category, index) => (
                        <div key={index} className="service-category">
                            <div className="category-header">
                                <div className="category-icon">{category.icon}</div>
                                <div>
                                    <h2>{category.title}</h2>
                                    <p>{category.description}</p>
                                </div>
                            </div>
                            <div className="category-features">
                                {category.features.map((feature, i) => (
                                    <div key={i} className="feature-item">
                                        <div className="feature-check">✓</div>
                                        <div className="feature-content">
                                            <h4>{feature.title}</h4>
                                            <p>{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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
        </div>
    )
}

export default Services
