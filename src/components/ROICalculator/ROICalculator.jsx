import { useState, useMemo } from 'react'
import './ROICalculator.css'

function ROICalculator() {
    const [investment, setInvestment] = useState('')
    const [expectedReturn, setExpectedReturn] = useState('')
    const [timePeriod, setTimePeriod] = useState('')

    const results = useMemo(() => {
        const inv = parseFloat(investment) || 0
        const ret = parseFloat(expectedReturn) || 0
        const period = parseFloat(timePeriod) || 1

        if (inv === 0) return null

        const gain = ret - inv
        const roi = ((gain) / inv) * 100
        const annualizedROI = period > 0 ? (Math.pow((ret / inv), (1 / period)) - 1) * 100 : 0
        const paybackPeriod = gain > 0 ? (inv / (gain / period)).toFixed(1) : 'N/A'

        return {
            roi: roi.toFixed(1),
            gain,
            annualizedROI: annualizedROI.toFixed(1),
            paybackPeriod,
        }
    }, [investment, expectedReturn, timePeriod])

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <div className="roi-calculator">
            <div className="roi-header">
                <h2>📈 ROI Calculator</h2>
                <p>Calculate return on your IT investment</p>
            </div>

            <div className="roi-form">
                <div className="roi-form-group">
                    <label>Initial Investment (₹)</label>
                    <input
                        type="number"
                        value={investment}
                        onChange={(e) => setInvestment(e.target.value)}
                        placeholder="e.g., 500000"
                    />
                </div>

                <div className="roi-form-group">
                    <label>Expected Total Returns (₹)</label>
                    <input
                        type="number"
                        value={expectedReturn}
                        onChange={(e) => setExpectedReturn(e.target.value)}
                        placeholder="e.g., 750000"
                    />
                </div>

                <div className="roi-form-group">
                    <label>Time Period (Years)</label>
                    <input
                        type="number"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        placeholder="e.g., 2"
                        step="0.5"
                    />
                </div>
            </div>

            {results && (
                <div className="roi-results">
                    <div className="roi-main-result">
                        <div className={`roi-percentage ${parseFloat(results.roi) >= 0 ? 'positive' : 'negative'}`}>
                            {parseFloat(results.roi) >= 0 ? '+' : ''}{results.roi}%
                        </div>
                        <div className="roi-label">Total Return on Investment</div>
                    </div>

                    <div className="roi-details">
                        <div className="roi-detail-item">
                            <div className="roi-detail-value">{formatCurrency(results.gain)}</div>
                            <div className="roi-detail-label">Net Gain/Loss</div>
                        </div>
                        <div className="roi-detail-item">
                            <div className="roi-detail-value">{results.annualizedROI}%</div>
                            <div className="roi-detail-label">Annualized ROI</div>
                        </div>
                    </div>

                    <div className="roi-timeline">
                        <div className="roi-timeline-value">
                            {results.paybackPeriod} {results.paybackPeriod !== 'N/A' ? 'years' : ''}
                        </div>
                        <div className="roi-detail-label">Payback Period</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ROICalculator
