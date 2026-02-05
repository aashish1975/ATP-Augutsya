import './UtilityCard.css'

function UtilityCard({ icon, title, description, url, category }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="utility-card"
            data-category={category}
        >
            <div className="utility-card-icon">{icon}</div>
            <div className="utility-card-content">
                <h3 className="utility-card-title">{title}</h3>
                <p className="utility-card-description">{description}</p>
            </div>
            <div className="utility-card-arrow">↗</div>
        </a>
    )
}

export default UtilityCard
