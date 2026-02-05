import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            // Simulate form submission
            console.log('Form submitted:', formData)
            setIsSubmitted(true)
        }
    }

    if (isSubmitted) {
        return (
            <div className="contact-form-container">
                <div className="form-success">
                    <div className="form-success-icon">✓</div>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="contact-form-container">
            <h3 className="contact-form-title">Send us a message</h3>
            <p className="contact-form-subtitle">We&apos;ll get back to you within 24 hours</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className={`form-group ${errors.name ? 'error' : ''}`}>
                        <label htmlFor="name">Your Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>

                    <div className={`form-group ${errors.email ? 'error' : ''}`}>
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="website">Website (Optional)</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                    />
                </div>

                <div className={`form-group ${errors.message ? 'error' : ''}`}>
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <div className="form-submit">
                    <button type="submit" className="btn btn-primary">
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
