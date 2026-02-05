import { useState } from 'react'
import ServiceRecommender from '../../components/ServiceRecommender/ServiceRecommender'
import QuoteGenerator from '../../components/QuoteGenerator/QuoteGenerator'
import './Calculators.css'

function Calculators() {
    const [activeTab, setActiveTab] = useState('gst')

    // GST Calculator state
    const [gstAmount, setGstAmount] = useState('')
    const [gstRate, setGstRate] = useState('18')
    const [gstType, setGstType] = useState('exclusive')

    // EMI Calculator state
    const [loanAmount, setLoanAmount] = useState('')
    const [interestRate, setInterestRate] = useState('')
    const [loanTenure, setLoanTenure] = useState('')

    // Age Calculator state
    const [birthDate, setBirthDate] = useState('')

    // GST Calculation
    const calculateGST = () => {
        const amount = parseFloat(gstAmount) || 0
        const rate = parseFloat(gstRate) / 100

        if (gstType === 'exclusive') {
            const gst = amount * rate
            const total = amount + gst
            return { baseAmount: amount, gst, total }
        } else {
            const baseAmount = amount / (1 + rate)
            const gst = amount - baseAmount
            return { baseAmount, gst, total: amount }
        }
    }

    // EMI Calculation
    const calculateEMI = () => {
        const P = parseFloat(loanAmount) || 0
        const r = (parseFloat(interestRate) || 0) / 12 / 100
        const n = parseFloat(loanTenure) || 0

        if (P === 0 || r === 0 || n === 0) return null

        const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
        const totalAmount = emi * n
        const totalInterest = totalAmount - P

        return { emi, totalAmount, totalInterest }
    }

    // Age Calculation
    const calculateAge = () => {
        if (!birthDate) return null

        const birth = new Date(birthDate)
        const today = new Date()

        let years = today.getFullYear() - birth.getFullYear()
        let months = today.getMonth() - birth.getMonth()
        let days = today.getDate() - birth.getDate()

        if (days < 0) {
            months--
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
        }
        if (months < 0) {
            years--
            months += 12
        }

        const totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24))

        return { years, months, days, totalDays }
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount)
    }

    const gstResult = calculateGST()
    const emiResult = calculateEMI()
    const ageResult = calculateAge()

    return (
        <div className="calculators-page">
            <section className="calculators-header">
                <div className="container">
                    <h1>Tools & Calculators</h1>
                    <p>Free utility calculators for your everyday needs</p>
                </div>
            </section>

            <section className="calculators-content">
                <div className="container">
                    <div className="calculator-tabs">
                        <button
                            className={`calc-tab ${activeTab === 'gst' ? 'active' : ''}`}
                            onClick={() => setActiveTab('gst')}
                        >
                            GST Calculator
                        </button>
                        <button
                            className={`calc-tab ${activeTab === 'emi' ? 'active' : ''}`}
                            onClick={() => setActiveTab('emi')}
                        >
                            EMI Calculator
                        </button>
                        <button
                            className={`calc-tab ${activeTab === 'age' ? 'active' : ''}`}
                            onClick={() => setActiveTab('age')}
                        >
                            Age Calculator
                        </button>
                    </div>

                    {/* GST Calculator */}
                    {activeTab === 'gst' && (
                        <div className="calculator-card">
                            <h2>🧾 GST Calculator</h2>
                            <div className="calc-form">
                                <div className="calc-form-group">
                                    <label>Amount (₹)</label>
                                    <input
                                        type="number"
                                        value={gstAmount}
                                        onChange={(e) => setGstAmount(e.target.value)}
                                        placeholder="Enter amount"
                                    />
                                </div>
                                <div className="calc-row">
                                    <div className="calc-form-group">
                                        <label>GST Rate</label>
                                        <select value={gstRate} onChange={(e) => setGstRate(e.target.value)}>
                                            <option value="5">5%</option>
                                            <option value="12">12%</option>
                                            <option value="18">18%</option>
                                            <option value="28">28%</option>
                                        </select>
                                    </div>
                                    <div className="calc-form-group">
                                        <label>Type</label>
                                        <select value={gstType} onChange={(e) => setGstType(e.target.value)}>
                                            <option value="exclusive">Exclusive</option>
                                            <option value="inclusive">Inclusive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {gstAmount && (
                                <div className="calc-result">
                                    <div className="calc-result-label">Total Amount</div>
                                    <div className="calc-result-value">{formatCurrency(gstResult.total)}</div>
                                    <div className="calc-result-details">
                                        <div className="calc-detail-row">
                                            <span>Base Amount</span>
                                            <span>{formatCurrency(gstResult.baseAmount)}</span>
                                        </div>
                                        <div className="calc-detail-row">
                                            <span>GST ({gstRate}%)</span>
                                            <span>{formatCurrency(gstResult.gst)}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* EMI Calculator */}
                    {activeTab === 'emi' && (
                        <div className="calculator-card">
                            <h2>🏦 EMI Calculator</h2>
                            <div className="calc-form">
                                <div className="calc-form-group">
                                    <label>Loan Amount (₹)</label>
                                    <input
                                        type="number"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                        placeholder="Enter loan amount"
                                    />
                                </div>
                                <div className="calc-row">
                                    <div className="calc-form-group">
                                        <label>Interest Rate (%)</label>
                                        <input
                                            type="number"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            placeholder="e.g., 10.5"
                                            step="0.1"
                                        />
                                    </div>
                                    <div className="calc-form-group">
                                        <label>Tenure (Months)</label>
                                        <input
                                            type="number"
                                            value={loanTenure}
                                            onChange={(e) => setLoanTenure(e.target.value)}
                                            placeholder="e.g., 36"
                                        />
                                    </div>
                                </div>
                            </div>
                            {emiResult && (
                                <div className="calc-result">
                                    <div className="calc-result-label">Monthly EMI</div>
                                    <div className="calc-result-value">{formatCurrency(emiResult.emi)}</div>
                                    <div className="calc-result-details">
                                        <div className="calc-detail-row">
                                            <span>Principal Amount</span>
                                            <span>{formatCurrency(parseFloat(loanAmount))}</span>
                                        </div>
                                        <div className="calc-detail-row">
                                            <span>Total Interest</span>
                                            <span>{formatCurrency(emiResult.totalInterest)}</span>
                                        </div>
                                        <div className="calc-detail-row">
                                            <span>Total Amount</span>
                                            <span>{formatCurrency(emiResult.totalAmount)}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Age Calculator */}
                    {activeTab === 'age' && (
                        <div className="calculator-card">
                            <h2>🎂 Age Calculator</h2>
                            <div className="calc-form">
                                <div className="calc-form-group">
                                    <label>Date of Birth</label>
                                    <input
                                        type="date"
                                        value={birthDate}
                                        onChange={(e) => setBirthDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            {ageResult && (
                                <div className="calc-result">
                                    <div className="calc-result-label">Your Age</div>
                                    <div className="calc-result-value">
                                        {ageResult.years} years
                                    </div>
                                    <div className="calc-result-details">
                                        <div className="calc-detail-row">
                                            <span>Full Age</span>
                                            <span>{ageResult.years}y {ageResult.months}m {ageResult.days}d</span>
                                        </div>
                                        <div className="calc-detail-row">
                                            <span>Total Days</span>
                                            <span>{ageResult.totalDays.toLocaleString()} days</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* AI Tools Section */}
            <section className="ai-tools-section">
                <div className="container">
                    <div className="ai-tools-header">
                        <h2>AI-Powered Tools</h2>
                        <p>Get personalized recommendations and instant quotes powered by AI</p>
                    </div>
                    <div className="ai-tools-grid">
                        <ServiceRecommender />
                        <QuoteGenerator />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calculators
