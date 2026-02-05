import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

// Models to try in order (fallback strategy)
const MODELS = ['gemini-2.0-flash', 'gemini-pro', 'gemini-1.5-pro']

// System context for Augutsya
const AUGUTSYA_CONTEXT = `You are the AI assistant for Augutsya, a techno-commercial consulting company based in Greater Noida, India.

COMPANY INFORMATION:
- Company: Augutsya Techno-Commercial Private Limited
- CEO: Mr. Abhishek Srivastava
- Location: The Grand Ultima, Sector 1, Greater Noida West, UP 201306
- Phone: +91 98114 75754
- Email: contact-us@augutsya.com
- Working Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM

SERVICES OFFERED:
1. IT Consulting - DC Design & Migration, Network Architecture, Lifecycle Management, Digital Transformation
2. Software Development - ERP Modules, Business Process Automation, API Development, Legacy Modernization
3. Mobile App Development - iOS & Android, Cross-platform (React Native, Flutter), Secure Authentication
4. Cloud Solutions - AWS, Azure, GCP, Cost Optimization, 24/7 Monitoring
5. Web Development - E-commerce, CMS, Progressive Web Apps
6. Cyber Security - Threat Protection, Compliance, Security Audits
7. Data Analytics - Business Intelligence, Data Visualization, Real-time Insights
8. Taxation Services - GST Registration, ITR Filing, Tax Planning, Compliance

RESPONSE GUIDELINES:
- Be professional, helpful, and friendly
- Keep responses concise (2-3 sentences unless details needed)
- If asked about pricing, say "Pricing varies by project. I can help you get a free consultation with our team."
- Always offer to schedule a consultation for complex inquiries
- If unsure, direct to contact the team directly`

// Helper: Retry with exponential backoff and model fallback
async function tryWithRetry(promptFn, maxRetries = 3) {
  let lastError = null

  for (const modelName of MODELS) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName })
        const result = await promptFn(model)
        return result
      } catch (error) {
        lastError = error
        console.warn(`Attempt ${attempt + 1} with ${modelName} failed:`, error.message)

        // If rate limited, wait before retry
        if (error.message?.includes('429') || error.message?.includes('Resource exhausted')) {
          const waitTime = Math.pow(2, attempt) * 1000 // 1s, 2s, 4s
          await new Promise(resolve => setTimeout(resolve, waitTime))
        } else {
          // For other errors, try next model immediately
          break
        }
      }
    }
  }

  throw lastError || new Error('All API attempts failed')
}

// Chat with AI Assistant
export async function chatWithAssistant(messages) {
  try {
    const conversationHistory = messages
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n')

    const prompt = `${AUGUTSYA_CONTEXT}

Previous conversation:
${conversationHistory}

Respond helpfully to the user's latest message. Be concise and professional.`

    const result = await tryWithRetry(async (model) => {
      const response = await model.generateContent(prompt)
      return response.response.text()
    })

    return result
  } catch (error) {
    console.error('Chat error:', error)
    // Return a helpful fallback response instead of throwing
    return getFallbackResponse(messages[messages.length - 1]?.content || '')
  }
}

// Fallback response when API fails
function getFallbackResponse(userMessage) {
  const lowercaseMsg = userMessage.toLowerCase()

  if (lowercaseMsg.includes('service') || lowercaseMsg.includes('offer')) {
    return `We offer: IT Consulting, Software Development, Mobile Apps, Cloud Solutions, Web Development, Cybersecurity, Data Analytics, and Taxation Services. Contact us at +91 98114 75754 for details!`
  }
  if (lowercaseMsg.includes('contact') || lowercaseMsg.includes('phone') || lowercaseMsg.includes('email')) {
    return `You can reach us at:\n📞 +91 98114 75754\n📧 contact-us@augutsya.com\n📍 The Grand Ultima, Sector 1, Greater Noida West`
  }
  if (lowercaseMsg.includes('price') || lowercaseMsg.includes('cost') || lowercaseMsg.includes('quote')) {
    return `Pricing varies by project scope. For a free consultation and quote, please contact us at +91 98114 75754 or email contact-us@augutsya.com.`
  }
  if (lowercaseMsg.includes('tax') || lowercaseMsg.includes('gst') || lowercaseMsg.includes('itr')) {
    return `We provide comprehensive taxation services including GST Registration, ITR Filing, Tax Planning, and Compliance. Contact us for expert assistance!`
  }
  if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi') || lowercaseMsg.includes('hey')) {
    return `Hello! Welcome to Augutsya. I'm here to help you with our technology and consulting services. What would you like to know?`
  }

  return `Thank you for your message! For detailed assistance, please contact our team at +91 98114 75754 or email contact-us@augutsya.com. We're happy to help!`
}

// Service Recommender
export async function getServiceRecommendation(answers) {
  try {
    const prompt = `${AUGUTSYA_CONTEXT}

Based on the user's answers to a service recommendation quiz, suggest the best Augutsya services for them.

USER ANSWERS:
1. Business Type: ${answers.businessType}
2. Primary Need: ${answers.primaryNeed}
3. Budget Range: ${answers.budget}
4. Timeline: ${answers.timeline}
5. Current Challenges: ${answers.challenges}

Respond in this JSON format:
{
  "recommended": [
    {
      "service": "Service Name",
      "match": 95,
      "reason": "One sentence explaining why this is a good fit"
    }
  ],
  "summary": "2-3 sentence personalized summary for the user"
}

Return ONLY valid JSON, no markdown.`

    const result = await tryWithRetry(async (model) => {
      const response = await model.generateContent(prompt)
      return response.response.text()
    })

    return JSON.parse(result.replace(/```json|```/g, '').trim())
  } catch (error) {
    console.error('Recommendation error:', error)
    // Return fallback recommendations
    return getFallbackRecommendation(answers)
  }
}

function getFallbackRecommendation(answers) {
  const recommendations = []

  if (answers.primaryNeed === 'software' || answers.primaryNeed === 'mobile') {
    recommendations.push({
      service: 'Software Development',
      match: 90,
      reason: 'Custom software solutions tailored to your business needs'
    })
  }
  if (answers.primaryNeed === 'cloud') {
    recommendations.push({
      service: 'Cloud Solutions',
      match: 95,
      reason: 'AWS, Azure, and GCP expertise for scalable infrastructure'
    })
  }
  if (answers.primaryNeed === 'tax') {
    recommendations.push({
      service: 'Taxation Services',
      match: 92,
      reason: 'Complete tax compliance and planning services'
    })
  }

  if (recommendations.length === 0) {
    recommendations.push({
      service: 'IT Consulting',
      match: 85,
      reason: 'Strategic technology guidance for your business'
    })
  }

  return {
    recommended: recommendations,
    summary: 'Based on your needs, we recommend these services. Contact us for a personalized consultation.'
  }
}

// Quote Generator
export async function generateQuote(projectDetails) {
  try {
    const prompt = `${AUGUTSYA_CONTEXT}

Generate a project cost estimate based on the following details:

PROJECT DETAILS:
- Service Type: ${projectDetails.serviceType}
- Project Description: ${projectDetails.description}
- Features Required: ${projectDetails.features}
- Timeline: ${projectDetails.timeline}
- Budget Preference: ${projectDetails.budget}

Respond in this JSON format:
{
  "estimatedCost": {
    "min": 50000,
    "max": 100000,
    "currency": "INR"
  },
  "breakdown": [
    { "item": "Discovery & Planning", "percentage": 15 },
    { "item": "Development", "percentage": 50 },
    { "item": "Testing & QA", "percentage": 20 },
    { "item": "Deployment & Support", "percentage": 15 }
  ],
  "timeline": "8-10 weeks",
  "notes": "Brief notes about the estimate"
}

Return ONLY valid JSON, no markdown. Make estimates realistic for Indian market.`

    const result = await tryWithRetry(async (model) => {
      const response = await model.generateContent(prompt)
      return response.response.text()
    })

    return JSON.parse(result.replace(/```json|```/g, '').trim())
  } catch (error) {
    console.error('Quote error:', error)
    // Return fallback quote
    return getFallbackQuote(projectDetails)
  }
}

function getFallbackQuote(projectDetails) {
  const budgetMultipliers = {
    'under 50k': { min: 25000, max: 50000 },
    '50k-2L': { min: 50000, max: 200000 },
    '2L-5L': { min: 200000, max: 500000 },
    '5L-10L': { min: 500000, max: 1000000 },
    'above 10L': { min: 1000000, max: 2500000 }
  }

  const budget = budgetMultipliers[projectDetails.budget] || { min: 100000, max: 300000 }

  return {
    estimatedCost: {
      min: budget.min,
      max: budget.max,
      currency: 'INR'
    },
    breakdown: [
      { item: 'Discovery & Planning', percentage: 15 },
      { item: 'Development', percentage: 50 },
      { item: 'Testing & QA', percentage: 20 },
      { item: 'Deployment & Support', percentage: 15 }
    ],
    timeline: projectDetails.timeline === 'urgent' ? '2-4 weeks' : '6-12 weeks',
    notes: 'This is an estimated range. Contact us for a detailed proposal.'
  }
}
