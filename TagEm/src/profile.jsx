import React, { useState } from 'react';
import './profile.css';

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        genderIdentity: "Pronoun/Pronoun",
        occupation: "UCR Student",
        bio: "I love Scotty the Bear!",
        resumeAttached: true,
        profilePicUrl: "https://images.pexels.com/photos/35796668/pexels-photo-35796668.jpeg",
        networkConnections: 124
    });

    const [isEditingDetails, setIsEditingDetails] = useState(false);
    const [isEditingBio, setIsEditingBio] = useState(false);
    const [tagEms, setTagEms] = useState([ // TBD: Actual States Need to Get Pulled From Backend
        {
            id: 1,
            content: "Omg Scotty the Bear wowowo",
            timestamp: "2h",
            Tag: 14,
            likes: 0,
            replies: 3
        },
        {
            id: 2,
            content: "I think we should give Scotty the Bear the key to the Belltower!",
            timestamp: "May 20",
            likes: 32,
            replies: 8
        }
    ]);

    const handleInputChange = (e) => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(JSON.parse(localStorage.getItem("user")));
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSaveDetails = () => {
        //backend apicall tbd
        setIsEditingDetails(false);
        setIsEditingBio(false);
    };
// Need to create a 'Create Tag-Site' (idk something that'll let people create 'tags' )
    return (
        <div className="profile-page">
            <div className="profile-container">

                <header className="profile-header">
                    <img
                        src={profile.profilePicUrl}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="header-text">
                        {isEditingDetails ? (
                            <div className="edit-form">
                                <input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                    placeholder="Full Name"
                                />
                                <input
                                    type="text"
                                    name="genderIdentity"
                                    value={profile.genderIdentity}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                    placeholder="Gender Identity"
                                />
                                <input
                                    type="text"
                                    name="occupation"
                                    value={profile.occupation}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                    placeholder="Occupation"
                                />
                            </div>
                        ) : (
                            <>
                                <h1 className="profile-name">{profile.name}</h1>
                                <p className="profile-subtext">{profile.genderIdentity}</p>
                                <p className="profile-occupation">{profile.occupation}</p>
                            </>
                        )}
                    </div>
                    {isEditingDetails ? (
                        <button className="edit-button save-button" onClick={handleSaveDetails}>
                            Save Details
                        </button>
                    ) : (
                        <button className="edit-button" onClick={() => setIsEditingDetails(true)}>
                            Edit Details
                        </button>
                    )}
                </header>

                <section className="profile-section">
                    <div className="section-header">
                        <h2>Bio</h2>
                        {isEditingBio ? (
                            <button className="edit-button save-button" onClick={handleSaveDetails}>
                                Save Bio
                            </button>
                        ) : (
                            <button className="edit-button" onClick={() => setIsEditingBio(true)}>
                                Edit Bio
                            </button>
                        )}
                    </div>
                    {isEditingBio ? (
                        <div className="edit-form">
                            <input
                                name="bio"
                                value={profile.bio}
                                onChange={handleInputChange}
                                className="edit-input"
                                placeholder="Tell us about yourself..."
                            />
                        </div>
                    ) : (
                        <p>{profile.bio}</p>
                    )}
                </section>
                <section className="profile-section">
                    <div className="section-header">
                        <h2>Resume</h2>
                        <button className="edit-button">Change Resume</button>
                    </div>
                    <p>
                        {profile.resumeAttached // Need to link to resume from backend
                            ? "📄 Resume attached (Alex_Johnson_Resume.pdf)"
                            : "No resume attached."}
                    </p>
                </section>

                <section className="profile-section">
                    <div className="section-header">
                        <h2>Network</h2>
                        <button className="edit-button">Manage Network</button>
                    </div>
                    <p>You have {profile.networkConnections} people in your network available to tag.</p>
                </section>

            </div>
                            
            <div className="My-TagEms">
                
                <div className="tag-ems-list">
                    {tagEms.map((tagEm) => (
                        <article key={tagEm.id} className="tag-em-post">
                            <div className="tag-em-avatar">
                                <img src={profile.profilePicUrl} alt={profile.name} />
                            </div>
                            <div className="tag-em-content">
                                <div className="tag-em-meta">
                                    <strong>{profile.name}</strong>
                                    <span className="tag-em-handle">@alex_designs</span>
                                    <span className="tag-em-dot">·</span>
                                    <span className="tag-em-time">{tagEm.timestamp}</span>
                                </div>
                                <p className="tag-em-text">{tagEm.content}</p>
                                <div className="tag-em-actions">
                                    <button className="action-btn reply-btn">
                                        Tag Em!    -- {tagEm.replies}
                                    </button>
                                    <button className="action-btn like-btn">
                                        ❤️  -- {tagEm.likes}
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;