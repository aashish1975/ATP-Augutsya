import UtilityCard from '../../components/UtilityCard/UtilityCard'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import InvoiceGenerator from '../../components/InvoiceGenerator/InvoiceGenerator'
import TaxCalendar from '../../components/TaxCalendar/TaxCalendar'
import DocumentChecklist from '../../components/DocumentChecklist/DocumentChecklist'
import BusinessNameGenerator from '../../components/BusinessNameGenerator/BusinessNameGenerator'
import ROICalculator from '../../components/ROICalculator/ROICalculator'
import BookingSystem from '../../components/BookingSystem/BookingSystem'
import './Utilities.css'

const utilityCategories = [
    {
        title: 'Electricity',
        utilities: [
            { icon: '⚡', title: 'BSES Yamuna', description: 'Delhi electricity bills', url: 'https://www.bsesdelhi.com/', category: 'electricity' },
            { icon: '⚡', title: 'BSES Rajdhani', description: 'Delhi electricity bills', url: 'https://www.bsesdelhi.com/', category: 'electricity' },
            { icon: '⚡', title: 'Tata Power', description: 'Power bill payments', url: 'https://www.tatapower.com/', category: 'electricity' },
        ],
    },
    {
        title: 'Gas',
        utilities: [
            { icon: '🔥', title: 'IGL', description: 'Indraprastha Gas Limited', url: 'https://www.iglonline.net/', category: 'gas' },
        ],
    },
    {
        title: 'Travel',
        utilities: [
            { icon: '🚂', title: 'IRCTC', description: 'Indian Railways booking', url: 'https://www.irctc.co.in/', category: 'travel' },
        ],
    },
    {
        title: 'Government IDs',
        utilities: [
            { icon: '🪪', title: 'Aadhaar (UIDAI)', description: 'Aadhaar card services', url: 'https://uidai.gov.in/', category: 'government' },
            { icon: '🪪', title: 'PAN (NSDL)', description: 'PAN card services', url: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html', category: 'government' },
            { icon: '📘', title: 'Passport Seva', description: 'Passport services', url: 'https://www.passportindia.gov.in/', category: 'government' },
        ],
    },
    {
        title: 'Taxation',
        utilities: [
            { icon: '📊', title: 'Income Tax e-Filing', description: 'ITR filing portal', url: 'https://www.incometax.gov.in/', category: 'government' },
            { icon: '📋', title: 'TIN (NSDL)', description: 'TAN/TIN services', url: 'https://www.tin-nsdl.com/', category: 'government' },
        ],
    },
    {
        title: 'Telecom',
        utilities: [
            { icon: '📱', title: 'Airtel Selfcare', description: 'Airtel account management', url: 'https://www.airtel.in/', category: 'telecom' },
            { icon: '📱', title: 'JIO', description: 'Jio services', url: 'https://www.jio.com/', category: 'telecom' },
        ],
    },
]

function Utilities() {
    return (
        <div className="utilities-page">
            {/* Page Header */}
            <section className="utilities-header">
                <div className="container">
                    <ScrollReveal>
                        <h1>Quick <span>Utilities</span></h1>
                        <p>
                            Business tools and essential Indian utility services.
                            Everything you need in one place.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Business Tools Section */}
            <section className="utilities-tools-section">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="section-title">🛠️ Business Tools</h2>
                    </ScrollReveal>

                    {/* Row 1: Invoice Generator + Tax Calendar */}
                    <div className="tools-grid">
                        <ScrollReveal>
                            <InvoiceGenerator />
                        </ScrollReveal>
                        <ScrollReveal>
                            <TaxCalendar />
                        </ScrollReveal>
                    </div>

                    {/* Row 2: Document Checklist + Business Name Generator */}
                    <div className="tools-grid">
                        <ScrollReveal>
                            <DocumentChecklist />
                        </ScrollReveal>
                        <ScrollReveal>
                            <BusinessNameGenerator />
                        </ScrollReveal>
                    </div>

                    {/* Row 3: ROI Calculator + Booking System */}
                    <div className="tools-grid">
                        <ScrollReveal>
                            <ROICalculator />
                        </ScrollReveal>
                        <ScrollReveal>
                            <BookingSystem />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Utilities Grid */}
            <section className="utilities-section">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="section-title">🔗 Quick Links</h2>
                    </ScrollReveal>

                    {utilityCategories.map((category, index) => (
                        <ScrollReveal key={index}>
                            <div className="utility-category">
                                <h3 className="utility-category-title">{category.title}</h3>
                                <div className="utilities-grid">
                                    {category.utilities.map((utility, i) => (
                                        <UtilityCard
                                            key={i}
                                            icon={utility.icon}
                                            title={utility.title}
                                            description={utility.description}
                                            url={utility.url}
                                            category={utility.category}
                                        />
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}

                    <div className="utilities-info">
                        <div className="utilities-info-icon">ℹ️</div>
                        <div className="utilities-info-content">
                            <h4>External Links</h4>
                            <p>
                                These links redirect to official external websites. Augutsya is not
                                responsible for the content or services provided by these third-party sites.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Utilities
