import AnimatedCounter from '../AnimatedCounter/AnimatedCounter'
import './StatsSection.css'

const stats = [
    { icon: '🚀', value: 50, suffix: '+', label: 'Projects Delivered' },
    { icon: '⏱️', value: 98, suffix: '%', label: 'On-time Delivery' },
    { icon: '⭐', value: 5, suffix: '★', label: 'Client Satisfaction' },
    { icon: '🛡️', value: 24, suffix: '/7', label: 'Support SLAs' },
]

function StatsSection() {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-card-icon">{stat.icon}</div>
                            <div className="stat-card-value">
                                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                            </div>
                            <div className="stat-card-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsSection
