import { Link } from 'react-router-dom'
import './ServiceCard.css'

function ServiceCard({ icon, title, description, features, featured = false }) {
    return (
        <article className={`service-card ${featured ? 'featured' : ''}`}>
            <div className="service-card-icon">{icon}</div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-description">{description}</p>
            {features && features.length > 0 && (
                <div className="service-card-features">
                    {features.map((feature, index) => (
                        <div key={index} className="service-card-feature">
                            {feature}
                        </div>
                    ))}
                </div>
            )}
            <Link to="/contact" className="service-card-link">
                Talk to expert
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </Link>
        </article>
    )
}

export default ServiceCard
