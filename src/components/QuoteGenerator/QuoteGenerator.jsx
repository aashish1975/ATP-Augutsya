import { useState } from 'react'
import { generateQuote } from '../../services/geminiService'
import './QuoteGenerator.css'

function QuoteGenerator() {
    const [formData, setFormData] = useState({
        serviceType: '',
        description: '',
        features: '',
        timeline: '',
        budget: '',
    })
    const [quote, setQuote] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const result = await generateQuote(formData)
            setQuote(result)
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleReset = () => {
        setFormData({
            serviceType: '',
            description: '',
            features: '',
            timeline: '',
            budget: '',
        })
        setQuote(null)
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount)
    }

    if (isLoading) {
        return (
            <div className="quote-generator">
                <div className="quote-loading">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Generating your quote with AI...</p>
                </div>
            </div>
        )
    }

    if (quote) {
        return (
            <div className="quote-generator">
                <div className="quote-results">
                    <div className="quote-results-header">
                        <h3>Your Project Quote</h3>
                        <p>Estimated based on your requirements</p>
                    </div>

                    <div className="quote-estimate">
                        <div className="quote-price">
                            {formatCurrency(quote.estimatedCost.min)} - {formatCurrency(quote.estimatedCost.max)}
                        </div>
                        <div className="quote-timeline">
                            Estimated timeline: {quote.timeline}
                        </div>
                    </div>

                    <div className="quote-breakdown">
                        <h4>Cost Breakdown</h4>
                        <div className="breakdown-items">
                            {quote.breakdown.map((item, index) => (
                                <div key={index} className="breakdown-item">
                                    <span>{item.item}</span>
                                    <span>{item.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="quote-notes">
                        <p>📝 {quote.notes}</p>
                    </div>

                    <div className="quote-actions">
                        <button className="btn btn-secondary" onClick={handleReset}>
                            Get New Quote
                        </button>
                        <a href="/contact" className="btn btn-primary">
                            Schedule Discussion
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="quote-generator">
            <div className="quote-header">
                <h2>Get Instant Quote</h2>
                <p>AI-powered project cost estimation</p>
            </div>

            <form className="quote-form" onSubmit={handleSubmit}>
                <div className="quote-form-group">
                    <label>Service Type</label>
                    <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="software">Custom Software</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="tax">Taxation Services</option>
                    </select>
                </div>

                <div className="quote-form-group">
                    <label>Project Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Briefly describe your project..."
                        required
                    />
                </div>

                <div className="quote-form-group">
                    <label>Key Features Required</label>
                    <input
                        type="text"
                        name="features"
                        value={formData.features}
                        onChange={handleChange}
                        placeholder="e.g., User auth, payments, admin panel"
                    />
                </div>

                <div className="quote-form-group">
                    <label>Expected Timeline</label>
                    <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (1-2 weeks)</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="flexible">Flexible</option>
                    </select>
                </div>

                <div className="quote-form-group">
                    <label>Budget Preference</label>
                    <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select budget range</option>
                        <option value="under 50k">Under ₹50,000</option>
                        <option value="50k-2L">₹50,000 - ₹2 Lakh</option>
                        <option value="2L-5L">₹2 Lakh - ₹5 Lakh</option>
                        <option value="5L-10L">₹5 Lakh - ₹10 Lakh</option>
                        <option value="above 10L">Above ₹10 Lakh</option>
                    </select>
                </div>

                <div className="quote-submit">
                    <button type="submit" className="btn btn-primary">
                        Generate Quote
                    </button>
                </div>
            </form>
        </div>
    )
}

export default QuoteGenerator
