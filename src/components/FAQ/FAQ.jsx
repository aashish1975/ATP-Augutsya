import { useState } from 'react'
import './FAQ.css'

const faqData = [
    {
        question: 'What services does Augutsya offer?',
        answer: 'We provide comprehensive techno-commercial consulting services including web development, cloud solutions, data analytics, cybersecurity, IT consulting, taxation services (GST registration, ITR filing), and 24/7 support & maintenance.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
        question: 'What are your pricing models?',
        answer: 'We offer flexible pricing including fixed-price projects, hourly consulting rates, and retainer-based support packages. Our pricing is transparent with no hidden fees. Contact us for a customized quote.'
    },
    {
        question: 'Do you provide ongoing support after project completion?',
        answer: 'Yes! We offer 24/7 support with guaranteed SLAs. Our support packages include proactive monitoring, regular updates, security patches, and priority bug fixes to ensure your systems run smoothly.'
    },
    {
        question: 'Can you help with GST registration and tax filing?',
        answer: 'Absolutely! Our taxation services cover GST registration, GST return filing, ITR preparation and filing, TDS compliance, and tax planning advisory. We handle everything from documentation to submission.'
    },
    {
        question: 'What technologies do you work with?',
        answer: 'We work with modern tech stacks including React, Next.js, Node.js, Python, AWS, Azure, GCP, MongoDB, PostgreSQL, and more. We choose the best technology based on your specific requirements.'
    },
    {
        question: 'How do I get started with Augutsya?',
        answer: 'Getting started is easy! Simply click "Get Consultation" to schedule a free discovery call. We\'ll discuss your requirements, provide recommendations, and create a tailored proposal for your project.'
    },
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <h2>Frequently Asked <span>Questions</span></h2>
                    <p>Find answers to common questions about our services and processes.</p>
                </div>

                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">+</span>
                            </button>
                            <div className="faq-answer">
                                <p className="faq-answer-content">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
