import { useState } from 'react'
import './BookingSystem.css'

const consultationTypes = [
    { id: 'discovery', icon: '🔍', title: 'Discovery Call', duration: '15 min' },
    { id: 'consultation', icon: '💼', title: 'Business Consultation', duration: '30 min' },
    { id: 'technical', icon: '⚙️', title: 'Technical Discussion', duration: '45 min' },
]

const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
]

function BookingSystem() {
    const [selectedType, setSelectedType] = useState('consultation')
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const getDaysInMonth = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1).getDay()
        const daysInMonth = new Date(year, month + 1, 0).getDate()

        const days = []
        for (let i = 0; i < firstDay; i++) {
            days.push(null)
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i)
        }
        return days
    }

    const isDateDisabled = (day) => {
        if (!day) return true
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return date < today || date.getDay() === 0
    }

    const formatMonth = (date) => {
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    }

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
    }

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
    }

    const handleBook = () => {
        if (selectedDate && selectedTime) {
            const dateStr = `${currentMonth.toLocaleDateString('en-US', { month: 'long' })} ${selectedDate}, ${currentMonth.getFullYear()}`
            alert(`Booking confirmed!\n\nType: ${consultationTypes.find(t => t.id === selectedType)?.title}\nDate: ${dateStr}\nTime: ${selectedTime}\n\nWe will send you a confirmation email shortly.`)
        }
    }

    const days = getDaysInMonth(currentMonth)
    const today = new Date().getDate()

    return (
        <div className="booking-section">
            <div className="booking-header">
                <h2>📅 Schedule a Consultation</h2>
                <p>Book a free consultation with our experts</p>
            </div>

            <div className="booking-options">
                {consultationTypes.map((type) => (
                    <div
                        key={type.id}
                        className={`booking-option ${selectedType === type.id ? 'selected' : ''}`}
                        onClick={() => setSelectedType(type.id)}
                    >
                        <div className="booking-option-icon">{type.icon}</div>
                        <h4>{type.title}</h4>
                        <p>{type.duration}</p>
                    </div>
                ))}
            </div>

            <div className="booking-calendar">
                <div className="booking-calendar-header">
                    <h4>{formatMonth(currentMonth)}</h4>
                    <div className="booking-calendar-nav">
                        <button onClick={prevMonth}>‹</button>
                        <button onClick={nextMonth}>›</button>
                    </div>
                </div>

                <div className="booking-calendar-grid">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="calendar-day-header">{day}</div>
                    ))}
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={`calendar-day ${!day ? 'empty' : ''} ${isDateDisabled(day) ? 'disabled' : ''} ${selectedDate === day ? 'selected' : ''} ${day === today && currentMonth.getMonth() === new Date().getMonth() ? 'today' : ''}`}
                            onClick={() => !isDateDisabled(day) && setSelectedDate(day)}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>

            {selectedDate && (
                <div className="booking-times">
                    {timeSlots.map((time) => (
                        <button
                            key={time}
                            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                            onClick={() => setSelectedTime(time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            )}

            {selectedDate && selectedTime && (
                <div className="booking-confirm">
                    <div className="booking-summary">
                        <div className="booking-summary-item">
                            <span>📋</span>
                            <span>{consultationTypes.find(t => t.id === selectedType)?.title}</span>
                        </div>
                        <div className="booking-summary-item">
                            <span>📅</span>
                            <span>{currentMonth.toLocaleDateString('en-US', { month: 'short' })} {selectedDate}</span>
                        </div>
                        <div className="booking-summary-item">
                            <span>🕐</span>
                            <span>{selectedTime}</span>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={handleBook}>
                        Confirm Booking
                    </button>
                </div>
            )}
        </div>
    )
}

export default BookingSystem
