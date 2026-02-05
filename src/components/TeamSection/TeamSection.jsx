import './TeamSection.css'

const teamMembers = [
    {
        name: 'Arsh Sharma',
        role: 'Founder & CEO',
        avatar: '👨‍💼',
        bio: 'Visionary leader with 10+ years in tech consulting and business strategy.',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Priya Kapoor',
        role: 'Head of Technology',
        avatar: '👩‍💻',
        bio: 'Full-stack expert specializing in cloud architecture and scalable solutions.',
        linkedin: '#',
        twitter: '#',
    },
    {
        name: 'Rahul Mehta',
        role: 'Taxation Lead',
        avatar: '👨‍⚖️',
        bio: 'Chartered Accountant with expertise in GST, ITR, and corporate taxation.',
        linkedin: '#',
        twitter: '#',
    },
]

function TeamSection() {
    return (
        <section className="team-section">
            <div className="container">
                <div className="team-header">
                    <h2>Meet Our <span>Team</span></h2>
                    <p>Dedicated professionals committed to delivering exceptional results for your business.</p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-avatar">{member.avatar}</div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <p className="team-bio">{member.bio}</p>
                            <div className="team-social">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    💼
                                </a>
                                <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    🐦
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection
