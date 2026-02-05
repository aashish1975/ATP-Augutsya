import { useState } from 'react'
import { getServiceRecommendation } from '../../services/geminiService'
import './ServiceRecommender.css'

const questions = [
    {
        id: 'businessType',
        question: 'What type of business are you?',
        options: [
            { value: 'startup', label: 'Startup', icon: '🚀' },
            { value: 'sme', label: 'Small/Medium Business', icon: '🏢' },
            { value: 'enterprise', label: 'Enterprise', icon: '🏛️' },
            { value: 'individual', label: 'Individual/Freelancer', icon: '👤' },
        ],
    },
    {
        id: 'primaryNeed',
        question: 'What is your primary need?',
        options: [
            { value: 'software', label: 'Software Development', icon: '💻' },
            { value: 'mobile', label: 'Mobile App', icon: '📱' },
            { value: 'cloud', label: 'Cloud/IT Infrastructure', icon: '☁️' },
            { value: 'tax', label: 'Taxation/Compliance', icon: '📋' },
        ],
    },
    {
        id: 'budget',
        question: 'What is your budget range?',
        options: [
            { value: 'under50k', label: 'Under ₹50,000', icon: '💰' },
            { value: '50k-2L', label: '₹50,000 - ₹2 Lakh', icon: '💵' },
            { value: '2L-10L', label: '₹2 Lakh - ₹10 Lakh', icon: '💎' },
            { value: 'above10L', label: 'Above ₹10 Lakh', icon: '🏆' },
        ],
    },
    {
        id: 'timeline',
        question: 'What is your expected timeline?',
        options: [
            { value: 'urgent', label: 'Urgent (1-2 weeks)', icon: '⚡' },
            { value: 'short', label: 'Short (1-2 months)', icon: '📅' },
            { value: 'medium', label: 'Medium (3-6 months)', icon: '📆' },
            { value: 'flexible', label: 'Flexible', icon: '🔄' },
        ],
    },
    {
        id: 'challenges',
        question: 'What is your biggest challenge?',
        options: [
            { value: 'tech', label: 'Technical expertise', icon: '🔧' },
            { value: 'cost', label: 'Cost optimization', icon: '📉' },
            { value: 'speed', label: 'Speed to market', icon: '🏃' },
            { value: 'scale', label: 'Scalability', icon: '📈' },
        ],
    },
]

function ServiceRecommender() {
    const [currentStep, setCurrentStep] = useState(0)
    const [answers, setAnswers] = useState({})
    const [results, setResults] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSelect = (value) => {
        setAnswers((prev) => ({
            ...prev,
            [questions[currentStep].id]: value,
        }))
    }

    const handleNext = async () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep((prev) => prev + 1)
        } else {
            // Submit and get recommendations
            setIsLoading(true)
            try {
                const recommendations = await getServiceRecommendation(answers)
                setResults(recommendations)
            } catch (error) {
                console.error('Error:', error)
            } finally {
                setIsLoading(false)
            }
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1)
        }
    }

    const handleRestart = () => {
        setCurrentStep(0)
        setAnswers({})
        setResults(null)
    }

    const currentQuestion = questions[currentStep]
    const currentAnswer = answers[currentQuestion?.id]

    if (isLoading) {
        return (
            <div className="recommender">
                <div className="recommender-loading">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Analyzing your needs with AI...</p>
                </div>
            </div>
        )
    }

    if (results) {
        return (
            <div className="recommender">
                <div className="recommender-results">
                    <div className="results-header">
                        <h3>Your Recommendations</h3>
                        <p>Based on your answers, here's what we suggest:</p>
                    </div>

                    <div className="result-cards">
                        {results.recommended?.map((rec, index) => (
                            <div key={index} className="result-card">
                                <div className="result-match">{rec.match}%</div>
                                <div className="result-info">
                                    <h4>{rec.service}</h4>
                                    <p>{rec.reason}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="result-summary">
                        <p>{results.summary}</p>
                    </div>

                    <div className="recommender-nav">
                        <button className="nav-btn secondary" onClick={handleRestart}>
                            Start Over
                        </button>
                        <a href="/contact" className="nav-btn primary">
                            Get Consultation
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="recommender">
            <div className="recommender-header">
                <h2>Find Your Perfect Service</h2>
                <p>Answer a few questions and let AI recommend the best fit</p>
            </div>

            <div className="recommender-progress">
                {questions.map((_, index) => (
                    <div
                        key={index}
                        className={`progress-step ${index === currentStep
                                ? 'active'
                                : index < currentStep
                                    ? 'completed'
                                    : ''
                            }`}
                    />
                ))}
            </div>

            <div className="recommender-question">
                <div className="question-label">
                    Question {currentStep + 1} of {questions.length}
                </div>
                <h3 className="question-text">{currentQuestion.question}</h3>

                <div className="question-options">
                    {currentQuestion.options.map((option) => (
                        <button
                            key={option.value}
                            className={`option-btn ${currentAnswer === option.value ? 'selected' : ''
                                }`}
                            onClick={() => handleSelect(option.value)}
                        >
                            <span className="option-icon">{option.icon}</span>
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="recommender-nav">
                <button
                    className="nav-btn secondary"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                >
                    Back
                </button>
                <button
                    className="nav-btn primary"
                    onClick={handleNext}
                    disabled={!currentAnswer}
                >
                    {currentStep === questions.length - 1 ? 'Get Recommendations' : 'Next'}
                </button>
            </div>
        </div>
    )
}

export default ServiceRecommender
