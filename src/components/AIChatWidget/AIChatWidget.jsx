import { useState, useRef, useEffect } from 'react'
import { chatWithAssistant } from '../../services/geminiService'
import './AIChatWidget.css'

const quickActions = [
    'What services do you offer?',
    'Get a free consultation',
    'Pricing information',
    'Contact details',
]

function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hi! 👋 I\'m the Augutsya AI assistant. How can I help you today?',
        },
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = async (text = input) => {
        if (!text.trim() || isLoading) return

        const userMessage = { role: 'user', content: text.trim() }
        setMessages((prev) => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            const response = await chatWithAssistant([...messages, userMessage])
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: response },
            ])
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: 'Sorry, I encountered an error. Please try again or contact us directly at +91 98114 75754.',
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className="chat-widget">
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="chat-avatar">🤖</div>
                        <div className="chat-header-info">
                            <h4>Augutsya AI</h4>
                            <p>Online</p>
                        </div>
                        <button className="chat-close" onClick={() => setIsOpen(false)}>
                            ✕
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`chat-message ${message.role}`}
                            >
                                <div className="message-avatar">
                                    {message.role === 'user' ? '👤' : '🤖'}
                                </div>
                                <div className="message-content">{message.content}</div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="chat-message assistant">
                                <div className="message-avatar">🤖</div>
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}

                        {messages.length === 1 && (
                            <div className="chat-quick-actions">
                                {quickActions.map((action, index) => (
                                    <button
                                        key={index}
                                        className="quick-action"
                                        onClick={() => handleSend(action)}
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input-container">
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isLoading}
                        />
                        <button
                            className="chat-send"
                            onClick={() => handleSend()}
                            disabled={!input.trim() || isLoading}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}

            <button
                className={`chat-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
            >
                <span className="chat-toggle-icon">{isOpen ? '✕' : '💬'}</span>
            </button>
        </div>
    )
}

export default AIChatWidget
