import { useMemo } from 'react'
import './ParticleBackground.css'

function ParticleBackground({ count = 50 }) {
    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 10}s`,
        }))
    }, [count])

    return (
        <div className="particles-container">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: particle.left,
                        animationDuration: particle.animationDuration,
                        animationDelay: particle.animationDelay,
                    }}
                />
            ))}
        </div>
    )
}

export default ParticleBackground
