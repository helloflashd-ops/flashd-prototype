import { useState } from 'react';
import './ProfileSettings.css';

function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Tattoo artist specializing in fine line and minimalist designs. 10+ years of experience.',
    studio: 'Ink & Soul Studio',
    city: 'Los Angeles',
    state: 'CA',
    styles: ['Fine Line', 'Minimalist', 'Blackwork'],
    instagram: '@janedoetattoos',
    portfolio: 'www.janedoetattoos.com',
  });

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <div className="profile-settings">
      <div className="section-header">
        <h2>Profile Settings</h2>
        <button className="btn-primary">Save Changes</button>
      </div>

      <div className="settings-grid">
        <div className="settings-section">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              rows="4"
              value={profile.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
            />
          </div>
        </div>

        <div className="settings-section">
          <h3>Studio Information</h3>
          <div className="form-group">
            <label>Studio Name</label>
            <input
              type="text"
              value={profile.studio}
              onChange={(e) => handleChange('studio', e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                value={profile.city}
                onChange={(e) => handleChange('city', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                value={profile.state}
                onChange={(e) => handleChange('state', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Specialties</h3>
          <div className="form-group">
            <label>Tattoo Styles</label>
            <div className="styles-tags">
              {profile.styles.map((style, index) => (
                <span key={index} className="style-tag">
                  {style}
                  <button className="remove-tag">×</button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add a style..."
              className="style-input"
            />
          </div>
        </div>

        <div className="settings-section">
          <h3>Social & Portfolio</h3>
          <div className="form-group">
            <label>Instagram</label>
            <input
              type="text"
              value={profile.instagram}
              onChange={(e) => handleChange('instagram', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Portfolio Website</label>
            <input
              type="url"
              value={profile.portfolio}
              onChange={(e) => handleChange('portfolio', e.target.value)}
            />
          </div>
        </div>

        <div className="settings-section danger-zone">
          <h3>Account Actions</h3>
          <div className="action-buttons">
            <button className="btn-secondary">Change Password</button>
            <button className="btn-danger">Deactivate Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
