import './UtilityCard.css'

function UtilityCard({ icon, title, description, url, category }) {
    const isImage = icon.startsWith('/');
    
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="utility-card"
            data-category={category}
        >
            <div className="utility-card-icon">
                {isImage ? (
                    <img src={icon} alt={title} className="utility-card-image" />
                ) : (
                    <span className="utility-card-emoji">{icon}</span>
                )}
            </div>
            <div className="utility-card-content">
                <h3 className="utility-card-title">{title}</h3>
                <p className="utility-card-description">{description}</p>
            </div>
            <div className="utility-card-arrow">↗</div>
        </a>
    )
}

export default UtilityCard
