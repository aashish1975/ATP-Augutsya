import { useState, useEffect } from 'react'
import './Testimonials.css'

const testimonials = [
    {
        id: 1,
        text: "Augutsya transformed our entire IT infrastructure. Their team's expertise in cloud migration saved us 40% on operational costs. Highly recommended!",
        author: "Rajesh Kumar",
        role: "CTO, TechStart India",
        initials: "RK",
    },
    {
        id: 2,
        text: "The mobile app they developed for us exceeded all expectations. Professional, timely, and the support has been exceptional. A true technology partner.",
        author: "Priya Sharma",
        role: "Founder, ShopEase",
        initials: "PS",
    },
    {
        id: 3,
        text: "Their taxation services simplified our compliance headaches. Now we focus on growing our business while they handle the complexities. Excellent team!",
        author: "Amit Verma",
        role: "Director, Verma Enterprises",
        initials: "AV",
    },
    {
        id: 4,
        text: "From concept to launch, Augutsya delivered a world-class e-commerce platform. Their attention to detail and technical prowess is unmatched.",
        author: "Sneha Gupta",
        role: "CEO, FashionFirst",
        initials: "SG",
    },
]

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const current = testimonials[currentIndex]

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2>What Our Clients Say</h2>
                    <p>Trusted by businesses across India for technology and consulting solutions</p>
                </div>

                <div className="testimonials-slider">
                    <div className="testimonial-card" key={current.id}>
                        <div className="testimonial-quote">"</div>
                        <p className="testimonial-text">{current.text}</p>
                        <div className="testimonial-author">
                            <div className="testimonial-avatar">{current.initials}</div>
                            <div className="testimonial-info">
                                <h4>{current.author}</h4>
                                <p>{current.role}</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
