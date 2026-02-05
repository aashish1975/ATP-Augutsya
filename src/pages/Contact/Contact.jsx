import ContactForm from '../../components/ContactForm/ContactForm'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="contact-header">
                <div className="container">
                    <h1>Get in <span>Touch</span></h1>
                    <p>
                        Have a project in mind? Let&apos;s discuss how we can help you
                        achieve your business goals.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="contact-info-card">
                                <h3>Contact Information</h3>

                                <div className="contact-item">
                                    <div className="contact-item-icon">📍</div>
                                    <div className="contact-item-content">
                                        <h4>Address</h4>
                                        <p>
                                            The Grand Ultima, Sector 1,<br />
                                            Greater Noida West, Uttar Pradesh,<br />
                                            201306
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-item-icon">📧</div>
                                    <div className="contact-item-content">
                                        <h4>Email</h4>
                                        <a href="mailto:contact-us@augutsya.com">contact-us@augutsya.com</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-item-icon">📞</div>
                                    <div className="contact-item-content">
                                        <h4>Phone</h4>
                                        <a href="tel:+919811475754">+91 98114 75754</a><br />
                                        <a href="tel:+919811469694">+91 98114 69694</a>
                                    </div>
                                </div>

                                {/* CEO Profile */}
                                <div className="ceo-profile">
                                    <div className="ceo-avatar">AA</div>
                                    <div className="ceo-info">
                                        <h4>Arsh Augutsya</h4>
                                        <p>Chief Executive Officer</p>
                                        <a href="mailto:arsh@augutsya.com">arsh@augutsya.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <h3>Business Hours</h3>
                                <div className="business-hours">
                                    <div className="hours-grid">
                                        <div className="hours-item">
                                            <span>Monday - Friday</span>
                                            <span>9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="hours-item">
                                            <span>Saturday</span>
                                            <span>10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="hours-item">
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </div>
                                        <div className="hours-item">
                                            <span>Support</span>
                                            <span>24/7 Available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
