import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return (
        <div className="not-found-page">
            <div className="not-found-decoration top-left">🔍</div>
            <div className="not-found-decoration bottom-right">🌐</div>

            <div className="not-found-content">
                <div className="not-found-code">404</div>
                <h1 className="not-found-title">Page Not Found</h1>
                <p className="not-found-description">
                    Oops! The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>
                <div className="not-found-actions">
                    <Link to="/" className="btn btn-primary">
                        Go Home
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
