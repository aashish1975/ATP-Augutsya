import './ClientLogos.css'

const clients = [
    { name: 'TechCorp', icon: '🏢' },
    { name: 'StartupXYZ', icon: '🚀' },
    { name: 'FinanceHub', icon: '💰' },
    { name: 'HealthPlus', icon: '🏥' },
    { name: 'EduLearn', icon: '📚' },
    { name: 'RetailMax', icon: '🛒' },
    { name: 'LogiTrans', icon: '🚛' },
    { name: 'MediaPro', icon: '🎬' },
    { name: 'FoodChain', icon: '🍽️' },
    { name: 'GreenEnergy', icon: '⚡' },
]

function ClientLogos() {
    return (
        <section className="client-logos">
            <div className="client-logos-header">
                <p>Trusted by leading businesses across India</p>
            </div>

            <div className="logos-track">
                <div className="logos-slide">
                    {clients.map((client, index) => (
                        <div key={index} className="logo-item">
                            <span>{client.icon}</span>
                            <span style={{ marginLeft: '8px' }}>{client.name}</span>
                        </div>
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="logos-slide">
                    {clients.map((client, index) => (
                        <div key={`dup-${index}`} className="logo-item">
                            <span>{client.icon}</span>
                            <span style={{ marginLeft: '8px' }}>{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientLogos
