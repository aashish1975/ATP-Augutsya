import { useState } from 'react'
import './DocumentChecklist.css'

const serviceDocuments = {
    'gst-registration': {
        title: 'GST Registration',
        documents: [
            { id: 1, name: 'PAN Card', description: 'PAN of the business owner or entity' },
            { id: 2, name: 'Aadhaar Card', description: 'Aadhaar of all partners/directors' },
            { id: 3, name: 'Business Address Proof', description: 'Electricity bill, rent agreement, or property documents' },
            { id: 4, name: 'Bank Account Details', description: 'Cancelled cheque or bank statement' },
            { id: 5, name: 'Photographs', description: 'Passport size photos of proprietor/partners' },
            { id: 6, name: 'Constitution Document', description: 'Partnership deed, MOA/AOA, or registration certificate' },
        ],
    },
    'itr-filing': {
        title: 'ITR Filing',
        documents: [
            { id: 1, name: 'Form 16', description: 'TDS certificate from employer' },
            { id: 2, name: 'Bank Statements', description: 'All bank account statements for the financial year' },
            { id: 3, name: 'Investment Proofs', description: '80C, 80D and other deduction proofs' },
            { id: 4, name: 'Capital Gains Details', description: 'Details of shares, mutual funds, property sold' },
            { id: 5, name: 'Form 26AS', description: 'Annual tax statement from IT portal' },
            { id: 6, name: 'Rent Receipts', description: 'If claiming HRA exemption' },
        ],
    },
    'company-registration': {
        title: 'Company Registration',
        documents: [
            { id: 1, name: 'Director ID Proof', description: 'PAN, Passport, or Voter ID of all directors' },
            { id: 2, name: 'Director Address Proof', description: 'Aadhaar, utility bill, or bank statement' },
            { id: 3, name: 'Registered Office Proof', description: 'NOC from owner, rent agreement' },
            { id: 4, name: 'MOA & AOA', description: 'Memorandum and Articles of Association' },
            { id: 5, name: 'DIR-2 Forms', description: 'Consent to act as director' },
            { id: 6, name: 'Digital Signatures', description: 'DSC of all directors' },
        ],
    },
}

function DocumentChecklist() {
    const [selectedService, setSelectedService] = useState('gst-registration')
    const [checkedItems, setCheckedItems] = useState({})

    const toggleItem = (id) => {
        const key = `${selectedService}-${id}`
        setCheckedItems({ ...checkedItems, [key]: !checkedItems[key] })
    }

    const currentDocs = serviceDocuments[selectedService]
    const checkedCount = currentDocs.documents.filter(
        (doc) => checkedItems[`${selectedService}-${doc.id}`]
    ).length
    const progress = (checkedCount / currentDocs.documents.length) * 100

    return (
        <div className="document-checklist">
            <div className="dc-header">
                <h2>📋 Document Checklist</h2>
                <p>Required documents for various services</p>
            </div>

            <div className="dc-selector">
                <label>Select Service</label>
                <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                >
                    {Object.keys(serviceDocuments).map((key) => (
                        <option key={key} value={key}>
                            {serviceDocuments[key].title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="dc-list">
                {currentDocs.documents.map((doc) => {
                    const isChecked = checkedItems[`${selectedService}-${doc.id}`]
                    return (
                        <div
                            key={doc.id}
                            className={`dc-item ${isChecked ? 'checked' : ''}`}
                            onClick={() => toggleItem(doc.id)}
                        >
                            <div className="dc-checkbox">
                                <span className="dc-checkbox-icon">✓</span>
                            </div>
                            <div className="dc-content">
                                <h4>{doc.name}</h4>
                                <p>{doc.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="dc-progress">
                <div className="dc-progress-bar">
                    <div className="dc-progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <div className="dc-progress-text">
                    {checkedCount} of {currentDocs.documents.length} documents ready
                </div>
            </div>
        </div>
    )
}

export default DocumentChecklist
