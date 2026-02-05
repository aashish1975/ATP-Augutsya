import { useState } from 'react'
import './InvoiceGenerator.css'

function InvoiceGenerator() {
    const [invoiceData, setInvoiceData] = useState({
        invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString().split('T')[0],
        clientName: '',
        clientEmail: '',
        clientAddress: '',
    })

    const [items, setItems] = useState([
        { description: '', quantity: 1, rate: 0 },
    ])

    const handleChange = (e) => {
        setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value })
    }

    const handleItemChange = (index, field, value) => {
        const newItems = [...items]
        newItems[index][field] = field === 'description' ? value : Number(value)
        setItems(newItems)
    }

    const addItem = () => {
        setItems([...items, { description: '', quantity: 1, rate: 0 }])
    }

    const removeItem = (index) => {
        if (items.length > 1) {
            setItems(items.filter((_, i) => i !== index))
        }
    }

    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
    const gst = subtotal * 0.18
    const total = subtotal + gst

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount)
    }

    const generateInvoice = () => {
        const invoiceContent = `
INVOICE
=======
Invoice #: ${invoiceData.invoiceNumber}
Date: ${invoiceData.date}

Bill To:
${invoiceData.clientName}
${invoiceData.clientEmail}
${invoiceData.clientAddress}

Items:
${items.map(item => `${item.description} - Qty: ${item.quantity} x ${formatCurrency(item.rate)} = ${formatCurrency(item.quantity * item.rate)}`).join('\n')}

-----------------
Subtotal: ${formatCurrency(subtotal)}
GST (18%): ${formatCurrency(gst)}
TOTAL: ${formatCurrency(total)}
-----------------

Thank you for your business!
Augutsya Techno-Commercial Pvt. Ltd.
    `

        const blob = new Blob([invoiceContent], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${invoiceData.invoiceNumber}.txt`
        a.click()
        URL.revokeObjectURL(url)
    }

    return (
        <div className="invoice-generator">
            <div className="invoice-header">
                <h2>📄 Invoice Generator</h2>
                <p>Create professional invoices instantly</p>
            </div>

            <div className="invoice-form">
                <div className="invoice-row">
                    <div className="invoice-group">
                        <label>Invoice Number</label>
                        <input
                            type="text"
                            name="invoiceNumber"
                            value={invoiceData.invoiceNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="invoice-group">
                        <label>Date</label>
                        <input
                            type="date"
                            name="date"
                            value={invoiceData.date}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="invoice-row">
                    <div className="invoice-group">
                        <label>Client Name</label>
                        <input
                            type="text"
                            name="clientName"
                            value={invoiceData.clientName}
                            onChange={handleChange}
                            placeholder="Enter client name"
                        />
                    </div>
                    <div className="invoice-group">
                        <label>Client Email</label>
                        <input
                            type="email"
                            name="clientEmail"
                            value={invoiceData.clientEmail}
                            onChange={handleChange}
                            placeholder="client@example.com"
                        />
                    </div>
                </div>

                <div className="invoice-group">
                    <label>Client Address</label>
                    <textarea
                        name="clientAddress"
                        value={invoiceData.clientAddress}
                        onChange={handleChange}
                        placeholder="Enter client address"
                        rows={2}
                    />
                </div>
            </div>

            <div className="invoice-items">
                <div className="invoice-items-header">
                    <h4>Items</h4>
                    <button className="add-item-btn" onClick={addItem}>+ Add Item</button>
                </div>

                {items.map((item, index) => (
                    <div key={index} className="invoice-item-row">
                        <input
                            type="text"
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Qty"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                            min="1"
                        />
                        <input
                            type="number"
                            placeholder="Rate"
                            value={item.rate}
                            onChange={(e) => handleItemChange(index, 'rate', e.target.value)}
                            min="0"
                        />
                        <button className="remove-item-btn" onClick={() => removeItem(index)}>×</button>
                    </div>
                ))}
            </div>

            <div className="invoice-totals">
                <div className="invoice-total-row">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="invoice-total-row">
                    <span>GST (18%)</span>
                    <span>{formatCurrency(gst)}</span>
                </div>
                <div className="invoice-total-row grand">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                </div>
            </div>

            <div className="invoice-actions">
                <button className="btn btn-secondary" onClick={() => window.print()}>
                    🖨️ Print
                </button>
                <button className="btn btn-primary" onClick={generateInvoice}>
                    📥 Download Invoice
                </button>
            </div>
        </div>
    )
}

export default InvoiceGenerator
