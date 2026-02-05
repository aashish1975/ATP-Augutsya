import React, { useEffect } from 'react';
import './Terms.css';

function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="legal-container">
                <header className="legal-header">
                    <h1>Terms & <span>Conditions</span></h1>
                    <p className="last-updated">Last Updated: February 6, 2026</p>
                </header>

                <div className="legal-content">
                    <section>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Augutsya website, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2>2. Intellectual Property</h2>
                        <p>
                            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Augutsya and is protected by international copyright laws.
                        </p>
                    </section>

                    <section>
                        <h2>3. User Conduct</h2>
                        <p>
                            You agree not to use the website for any purpose that is unlawful or prohibited by these Terms. You may not use the website in any manner that could damage, disable, overburden, or impair any Augutsya server.
                        </p>
                    </section>

                    <section>
                        <h2>4. Limitation of Liability</h2>
                        <p>
                            Augutsya shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the website or services.
                        </p>
                    </section>

                    <section>
                        <h2>5. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Augutsya operates, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2>6. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Your continued use of the website following the posting of changes will mean that you accept and agree to the changes.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Terms;
