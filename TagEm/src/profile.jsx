import { useEffect, useState } from 'react';
import './profile.css';

const ProfilePage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const [profile, setProfile] = useState({
        name: "",
        genderIdentity: "",
        occupation: "",
        profilePicUrl: null,
        bio: "",
        resumeattached: null
    });

    useEffect(() => {
        async function fetchProfileData() {
            const storedUserString = localStorage.getItem("user");
            if (!storedUserString) {
                console.log("No user is logged in");
                return; 
            }
            const storedUser = JSON.parse(storedUserString);
            try {
                const response = await fetch(`http://localhost:5001/api/users/profile/${storedUser.email}`);
                
                if (response.ok) {
                    const data = await response.json();
                    setProfile(data);
                } else {
                    console.error("Failed to fetch profile");
                }
            } catch (err) {
                console.error("Network error:", err);
            }
        }
        fetchProfileData();
    }, []);

    const [isEditingDetails, setIsEditingDetails] = useState(false);
    const [isEditingBio, setIsEditingBio] = useState(false);
    const [isEditingResume, setIsEditingResume] = useState(false);
    const [error, setError] = useState("");
    const [image, handleImage] = useState(null);
    const [resume, setResume] = useState(null);
    const [tagEms, setTagEms] = useState([
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
        console.log("hi");
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveDetails = async () => {
        console.log("BUTTON CLICKED");
        const formData = new FormData();
        formData.append("name", profile.name);
        formData.append("genderIdentity", profile.genderIdentity);
        formData.append("occupation", profile.occupation);
        if (image) {
            formData.append("image", image);
        }
        formData.append("bio", profile.bio);
        if (resume) {
            formData.append("resume", resume);
        }

        const API_URL = `http://localhost:5001/api/Profile/${user.id}`;
        try{
            const response = await fetch(API_URL, {
                method: 'PUT',
                body: formData
            });

            const data = await response.json();
            if(!response.ok){
                console.log("error");
                return;
            }
            setProfile(data);
        } catch(err){
            console.log(err);
        }

        setIsEditingDetails(false);
        setIsEditingBio(false);
        setIsEditingResume(false);
    };
    const handleFetch = async () => {
        const API_URL = `http://localhost:5001/api/Profile/${user.id}`;
        console.log(API_URL);
        const response = await fetch(API_URL);
        const data = await response.json();
        setProfile(data);
        console.log("FETCHED PROFILE:", data);
        console.log(profile);
    }

    useEffect(() => {
        handleFetch()
    }, [])
// Need to create a 'Create Tag-Site' (idk something that'll let people create 'tags' )
    return (
        <div className="profile-page">
            <div className="profile-container">

                <header className="profile-header">
                    <img
                        src={image ? URL.createObjectURL(image) : profile.profilePicUrl || undefined}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="header-text">
                        {isEditingDetails ? (
                            <div className="edit-form">
                                <input
                                    type="text"
                                    name="name"
                                    value={profile.name || ""}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                    placeholder="Full Name"
                                />
                                <input
                                    type="text"
                                    name="genderIdentity"
                                    value={profile.genderIdentity || ""}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                    placeholder="Gender Identity"
                                />
                                <input
                                    type="text"
                                    name="occupation"
                                    value={profile.occupation || ""}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                    placeholder="Occupation"
                                />
                                <input
                                    type="file"
                                    name="Profile Picture"
                                    accept="image/png, image/jpeg"
                                    onChange={(e)=>{
                                        console.log(e.target.files[0]);
                                        handleImage(e.target.files[0]);}}
                                    className="edit-input"
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
                        <button className="edit-button" onClick={() => {
                            console.log("edit clicked");
                            setIsEditingDetails(true);
                            }}
                        >
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
                                <input
                                    type="text"
                                    name="bio"
                                    value={profile.bio || ""}
                                    onChange={handleInputChange}
                                    className="edit-input"
                                    placeholder="Tell us about yourself..."
                                />
                            ) : (
                                <p className="bio-text">{profile.bio}</p>
                            )}
                </section>

                <section className="profile-section">
                    <div className="section-header">
                        <h2>Resume</h2>
                    </div>
                    {isEditingResume ? (
                                <button className="edit-button save-button" onClick={handleSaveDetails}>
                                    Save Resume
                                </button>
                            ) : (
                                <button className="edit-button" onClick={() => setIsEditingResume(true)}>
                                    Change Resume
                                </button>
                            )}
                    {isEditingResume ? (
                        <input
                            type="file"
                            name="resume"
                            onChange={(e) => setResume(e.target.files[0])}
                            className="edit-input"
                            accept=".pdf,.doc,.docx"
                        />
                    ) : (
                        <p className="resume-text">
                            <a 
                                href={`http://localhost:5001${profile.resumeattached}`} 
                                target="_blank"
                            >
                                Resume
                            </a>
                        </p>
                    )}
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
                                <img src={image ? URL.createObjectURL(image) : profile.profilePicUrl || undefined} alt={profile.name} />
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