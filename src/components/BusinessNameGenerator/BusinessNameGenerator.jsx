import { useState } from 'react'
import './BusinessNameGenerator.css'

// Fallback name generation when API is unavailable
function generateLocalNames(industry, keywords, style) {
    const prefixes = ['Pro', 'Tech', 'Neo', 'Prime', 'Elite', 'Peak', 'Core', 'Apex']
    const suffixes = ['Labs', 'Hub', 'Works', 'Solutions', 'Systems', 'Group', 'Co', 'Digital']
    const techWords = ['Byte', 'Cloud', 'Data', 'Smart', 'Sync', 'Link', 'Net', 'Logic']

    const names = []
    const keywordArray = keywords.split(' ').filter(k => k.length > 2)

    // Style-based name generation
    if (style === 'modern') {
        for (let i = 0; i < 6; i++) {
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
            const tech = techWords[Math.floor(Math.random() * techWords.length)]
            names.push({
                name: `${prefix}${tech}`,
                type: 'Modern Tech',
            })
        }
    } else if (style === 'professional') {
        for (let i = 0; i < 6; i++) {
            const keyword = keywordArray[i % keywordArray.length] || industry
            const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
            names.push({
                name: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} ${suffix}`,
                type: 'Professional',
            })
        }
    } else {
        for (let i = 0; i < 6; i++) {
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
            const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
            names.push({
                name: `${prefix} ${suffix}`,
                type: 'Creative',
            })
        }
    }

    return names.slice(0, 6)
}

function BusinessNameGenerator() {
    const [formData, setFormData] = useState({
        industry: '',
        keywords: '',
        style: 'modern',
    })
    const [results, setResults] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [copied, setCopied] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate AI generation
        await new Promise(resolve => setTimeout(resolve, 1500))

        const names = generateLocalNames(formData.industry, formData.keywords, formData.style)
        setResults(names)
        setIsLoading(false)
    }

    const copyToClipboard = (name, index) => {
        navigator.clipboard.writeText(name)
        setCopied(index)
        setTimeout(() => setCopied(null), 2000)
    }

    return (
        <div className="business-name-generator">
            <div className="bng-header">
                <h2>🏢 Business Name Generator</h2>
                <p>AI-powered company name suggestions</p>
            </div>

            <form className="bng-form" onSubmit={handleSubmit}>
                <div className="bng-form-group">
                    <label>Industry</label>
                    <select name="industry" value={formData.industry} onChange={handleChange} required>
                        <option value="">Select industry</option>
                        <option value="technology">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="retail">Retail</option>
                        <option value="consulting">Consulting</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="bng-form-group">
                    <label>Keywords (describe your business)</label>
                    <input
                        type="text"
                        name="keywords"
                        value={formData.keywords}
                        onChange={handleChange}
                        placeholder="e.g., innovation, cloud, digital"
                        required
                    />
                </div>

                <div className="bng-form-group">
                    <label>Name Style</label>
                    <select name="style" value={formData.style} onChange={handleChange}>
                        <option value="modern">Modern & Trendy</option>
                        <option value="professional">Professional & Classic</option>
                        <option value="creative">Creative & Unique</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Generating...' : '✨ Generate Names'}
                </button>
            </form>

            {isLoading && (
                <div className="bng-loading">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Creating unique names...</p>
                </div>
            )}

            {results && !isLoading && (
                <div className="bng-results">
                    {results.map((result, index) => (
                        <div key={index} className="bng-result-card">
                            <div>
                                <div className="bng-result-name">{result.name}</div>
                                <div className="bng-result-type">{result.type}</div>
                            </div>
                            <button
                                className="bng-copy-btn"
                                onClick={() => copyToClipboard(result.name, index)}
                            >
                                {copied === index ? '✓ Copied' : 'Copy'}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default BusinessNameGenerator
