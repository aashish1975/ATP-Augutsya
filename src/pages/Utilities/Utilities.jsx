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
            { icon: '/bsesyamuna.png', title: 'BSES Yamuna', description: 'Delhi electricity bills', url: 'https://www.bsesdelhi.com/bses-yamuna', category: 'electricity' },
            { icon: '/tatapower.png', title: 'Tata Power-DDL', description: 'Power bill payments', url: 'https://www.tatapower-ddl.com/', category: 'electricity' },
            { icon: '/bsesdelhi.png', title: 'BSES Delhi (BRPL)', description: 'Delhi electricity bills', url: 'https://www.bsesdelhi.com/bses-rajdhani', category: 'electricity' },
        ],
    },
    {
        title: 'Gas',
        utilities: [
            { icon: '/igl.png', title: 'IGL', description: 'Indraprastha Gas Limited', url: 'https://www.iglonline.net/', category: 'gas' },
        ],
    },
    {
        title: 'Travel',
        utilities: [
            { icon: '/irctc.png', title: 'IRCTC', description: 'Indian Railways booking', url: 'https://www.irctc.co.in/', category: 'travel' },
            { icon: '/mmyt.png', title: 'MakeMyTrip', description: 'Flight & hotel booking', url: 'https://www.makemytrip.com/', category: 'travel' },
        ],
    },
    {
        title: 'Government IDs',
        utilities: [
            { icon: '/aadhar.png', title: 'UIDAI (Aadhaar)', description: 'Aadhaar card services', url: 'https://uidai.gov.in/', category: 'government' },
            { icon: '/pancard.png', title: 'PAN (NSDL)', description: 'PAN card services', url: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html', category: 'government' },
            { icon: '/voterid.png', title: 'NVSP (Voter Services)', description: 'Voter ID services', url: 'https://www.nvsp.in/', category: 'government' },
            { icon: '/passportseva.png', title: 'Passport Seva', description: 'Passport services', url: 'https://www.passportindia.gov.in/', category: 'government' },
        ],
    },
    {
        title: 'Taxation',
        utilities: [
            { icon: '/tinlogo.png', title: 'TIN (e-Tax NSDL)', description: 'TAN/TIN services', url: 'https://www.tin-nsdl.com/', category: 'government' },
            { icon: '/incometax.png', title: 'Income Tax e-Filing', description: 'ITR filing portal', url: 'https://www.incometax.gov.in/', category: 'government' },
        ],
    },
    {
        title: 'Telecom',
        utilities: [
            { icon: '/airtel.png', title: 'Airtel Selfcare', description: 'Airtel account management', url: 'https://www.airtel.in/', category: 'telecom' },
            { icon: '/jiologo.jpeg', title: 'JIO', description: 'Jio services', url: 'https://www.jio.com/', category: 'telecom' },
        ],
    },
    {
        title: 'Payments & Finance',
        utilities: [
            { icon: '/paytm.png', title: 'Paytm', description: 'Digital payments & wallet', url: 'https://paytm.com/', category: 'payments' },
            { icon: '/amazon.png', title: 'Amazon India', description: 'Online shopping', url: 'https://www.amazon.in/', category: 'payments' },
            { icon: '/payzapp.png', title: 'HDFC PayZapp', description: 'Mobile banking app', url: 'https://www.hdfcbank.com/', category: 'payments' },
            { icon: '/moneycontrol.png', title: 'Moneycontrol', description: 'Financial news & data', url: 'https://www.moneycontrol.com/', category: 'payments' },
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
                        <div className="section-header">
                            <div className="section-badge">
                                <span className="badge-icon">🔗</span>
                                <span className="badge-text">Quick Access</span>
                            </div>
                            <h2 className="section-title">Essential <span>Utilities</span></h2>
                            <p className="section-description">
                                Quick access to important government services, bill payments, and essential utilities
                            </p>
                        </div>
                    </ScrollReveal>

                    {utilityCategories.map((category, index) => (
                        <ScrollReveal key={index}>
                            <div className="utility-category">
                                <div className="category-header">
                                    <div className="category-icon-wrapper">
                                        <div className="category-icon">
                                            {category.title === 'Electricity' && '⚡'}
                                            {category.title === 'Gas' && '🔥'}
                                            {category.title === 'Travel' && '✈️'}
                                            {category.title === 'Government IDs' && '🆔'}
                                            {category.title === 'Taxation' && '📊'}
                                            {category.title === 'Telecom' && '📱'}
                                            {category.title === 'Payments & Finance' && '💳'}
                                        </div>
                                        <div className="icon-glow"></div>
                                    </div>
                                    <div className="category-content">
                                        <h3 className="category-title">{category.title}</h3>
                                        <p className="category-description">
                                            {category.utilities.length} services available
                                        </p>
                                    </div>
                                </div>
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
                        <div className="info-icon-wrapper">
                            <div className="info-icon">ℹ️</div>
                            <div className="icon-pulse"></div>
                        </div>
                        <div className="utilities-info-content">
                            <h4>External Links Notice</h4>
                            <p>
                                These links redirect to official external websites. Augutsya is not
                                responsible for the content or services provided by these third-party sites.
                                Please verify the authenticity of websites before sharing personal information.
                            </p>
                            <div className="info-actions">
                                <span className="info-badge">Secure</span>
                                <span className="info-badge">Verified</span>
                                <span className="info-badge">Official</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Utilities
