import React, { useEffect } from 'react';
import '../Terms/Terms.css'; // Reuse common legal styles

function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="legal-container">
                <header className="legal-header">
                    <h1>Privacy <span>Policy</span></h1>
                    <p className="last-updated">Last Updated: February 6, 2026</p>
                </header>

                <div className="legal-content">
                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            At Augutsya, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>
                            We may collect personal information such as your name and email address when you voluntarily provide it through our contact forms or when you sign up for our services.
                        </p>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to provide and improve our services, communicate with you, and personalize your experience on our website.
                        </p>
                    </section>

                    <section>
                        <h2>4. Cookies and Tracking</h2>
                        <p>
                            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can set your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section>
                        <h2>5. Data Security</h2>
                        <p>
                            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information.
                        </p>
                    </section>

                    <section>
                        <h2>6. Third-Party Services</h2>
                        <p>
                            We may employ third-party companies and individuals to facilitate our services. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Privacy;
