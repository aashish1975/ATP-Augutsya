import { useState } from 'react'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import './Blog.css'

const blogPosts = [
    {
        id: 1,
        icon: '📊',
        category: 'Technology',
        title: 'The Future of AI in Business: 2024 Trends',
        excerpt: 'Discover how artificial intelligence is transforming business operations and what trends to watch for in the coming year.',
        date: 'Feb 5, 2024',
        readTime: '5 min read',
        featured: true,
    },
    {
        id: 2,
        icon: '💰',
        category: 'Taxation',
        title: 'GST Filing Guide: Avoid These Common Mistakes',
        excerpt: 'A comprehensive guide to GST filing for businesses, including common pitfalls and how to avoid them.',
        date: 'Feb 3, 2024',
        readTime: '8 min read',
    },
    {
        id: 3,
        icon: '☁️',
        category: 'Cloud',
        title: 'Cloud Migration: A Step-by-Step Approach',
        excerpt: 'Learn the best practices for migrating your infrastructure to the cloud without disrupting operations.',
        date: 'Feb 1, 2024',
        readTime: '6 min read',
    },
    {
        id: 4,
        icon: '🔒',
        category: 'Security',
        title: 'Cybersecurity Best Practices for SMBs',
        excerpt: 'Essential security measures every small and medium business should implement to protect their data.',
        date: 'Jan 28, 2024',
        readTime: '7 min read',
    },
    {
        id: 5,
        icon: '📱',
        category: 'Development',
        title: 'React Native vs Flutter: Which to Choose?',
        excerpt: 'A detailed comparison of the two leading cross-platform mobile development frameworks.',
        date: 'Jan 25, 2024',
        readTime: '10 min read',
    },
    {
        id: 6,
        icon: '📈',
        category: 'Business',
        title: 'Digital Transformation: Where to Start',
        excerpt: 'A roadmap for businesses looking to embark on their digital transformation journey.',
        date: 'Jan 20, 2024',
        readTime: '6 min read',
    },
]

function Blog() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const featuredPost = blogPosts.find(post => post.featured)
    const regularPosts = blogPosts.filter(post => !post.featured)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email) {
            setSubscribed(true)
            setEmail('')
            setTimeout(() => setSubscribed(false), 3000)
        }
    }

    return (
        <div className="blog-page">
            <section className="blog-header">
                <div className="container">
                    <ScrollReveal>
                        <h1>Blog & Insights</h1>
                        <p>Stay updated with the latest in technology, business, and taxation</p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="blog-content">
                <div className="container">
                    {/* Featured Post */}
                    {featuredPost && (
                        <ScrollReveal className="blog-featured">
                            <div className="blog-featured-card">
                                <div className="blog-featured-image">{featuredPost.icon}</div>
                                <div className="blog-featured-content">
                                    <span className="blog-card-category">{featuredPost.category}</span>
                                    <h2>{featuredPost.title}</h2>
                                    <p>{featuredPost.excerpt}</p>
                                    <div className="blog-card-meta">
                                        <span>📅 {featuredPost.date}</span>
                                        <span>⏱️ {featuredPost.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Blog Grid */}
                    <div className="blog-grid">
                        {regularPosts.map((post, index) => (
                            <ScrollReveal key={post.id} animation={index % 2 === 0 ? 'from-left' : 'from-right'}>
                                <article className="blog-card">
                                    <div className="blog-card-image">{post.icon}</div>
                                    <div className="blog-card-content">
                                        <span className="blog-card-category">{post.category}</span>
                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                        <div className="blog-card-meta">
                                            <span>📅 {post.date}</span>
                                            <span>⏱️ {post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="newsletter-card">
                            <h3>📬 Subscribe to Our Newsletter</h3>
                            <p>Get the latest insights, tips, and updates delivered to your inbox</p>
                            <form className="newsletter-form" onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit">
                                    {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}

export default Blog
