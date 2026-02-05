import './TaxCalendar.css'

const taxDeadlines = [
    {
        date: new Date(2024, 1, 11), // Feb 11
        title: 'GSTR-1 Filing',
        description: 'Monthly outward supplies for January',
        type: 'urgent',
    },
    {
        date: new Date(2024, 1, 13), // Feb 13
        title: 'GSTR-6 Filing',
        description: 'Input Service Distributor return',
        type: 'upcoming',
    },
    {
        date: new Date(2024, 1, 20), // Feb 20
        title: 'GSTR-3B Filing',
        description: 'Monthly summary return for January',
        type: 'upcoming',
    },
    {
        date: new Date(2024, 2, 15), // Mar 15
        title: 'Advance Tax (Q4)',
        description: 'Fourth installment of advance tax',
        type: 'normal',
    },
    {
        date: new Date(2024, 2, 31), // Mar 31
        title: 'Financial Year End',
        description: 'Complete tax-saving investments',
        type: 'normal',
    },
    {
        date: new Date(2024, 6, 31), // Jul 31
        title: 'ITR Filing Deadline',
        description: 'Income Tax Return for non-audit cases',
        type: 'normal',
    },
]

function TaxCalendar() {
    const formatDate = (date) => {
        return {
            day: date.getDate(),
            month: date.toLocaleDateString('en-US', { month: 'short' }),
        }
    }

    const getStatusLabel = (type) => {
        switch (type) {
            case 'urgent': return 'Due Soon'
            case 'upcoming': return 'This Week'
            default: return 'Scheduled'
        }
    }

    const getDaysLeft = (date) => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24))
        return diff
    }

    return (
        <div className="tax-calendar">
            <div className="tax-calendar-header">
                <h2>📅 Tax Due Date Calendar</h2>
                <p>Stay on top of your compliance deadlines</p>
            </div>

            <div className="tax-deadlines">
                {taxDeadlines.map((deadline, index) => {
                    const { day, month } = formatDate(deadline.date)
                    const daysLeft = getDaysLeft(deadline.date)

                    return (
                        <div key={index} className={`tax-deadline-card ${deadline.type}`}>
                            <div className="deadline-date">
                                <div className="deadline-day">{day}</div>
                                <div className="deadline-month">{month}</div>
                            </div>
                            <div className="deadline-info">
                                <h4>{deadline.title}</h4>
                                <p>{deadline.description}</p>
                            </div>
                            <span className={`deadline-status ${deadline.type}`}>
                                {daysLeft > 0 ? `${daysLeft} days left` : getStatusLabel(deadline.type)}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TaxCalendar
