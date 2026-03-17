import { useState } from 'react';
import './FlashListings.css';

const mockFlashData = [
  {
    id: 1,
    design: 'Minimalist Moon',
    style: 'Fine Line',
    size: 'Small',
    price: 150,
    status: 'Available',
    views: 342,
    saves: 28,
  },
  {
    id: 2,
    design: 'Traditional Rose',
    style: 'Traditional',
    size: 'Medium',
    price: 250,
    status: 'Available',
    views: 521,
    saves: 45,
  },
  {
    id: 3,
    design: 'Geometric Wolf',
    style: 'Blackwork',
    size: 'Large',
    price: 400,
    status: 'Booked',
    views: 892,
    saves: 67,
  },
  {
    id: 4,
    design: 'Watercolor Flower',
    style: 'Watercolor',
    size: 'Medium',
    price: 220,
    status: 'Available',
    views: 456,
    saves: 38,
  },
  {
    id: 5,
    design: 'Snake Dagger',
    style: 'Neo Traditional',
    size: 'Large',
    price: 380,
    status: 'Available',
    views: 634,
    saves: 52,
  },
];

function FlashListings() {
  const [flashListings] = useState(mockFlashData);

  return (
    <div className="flash-listings">
      <div className="section-header">
        <h2>Your Flash Listings</h2>
        <button className="btn-primary">Add New Flash</button>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total Listings</div>
          <div className="stat-value">{flashListings.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Available</div>
          <div className="stat-value">
            {flashListings.filter((f) => f.status === 'Available').length}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Views</div>
          <div className="stat-value">
            {flashListings.reduce((sum, f) => sum + f.views, 0)}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Saves</div>
          <div className="stat-value">
            {flashListings.reduce((sum, f) => sum + f.saves, 0)}
          </div>
        </div>
      </div>

      <div className="flash-list">
        {flashListings.map((flash) => (
          <div key={flash.id} className="flash-item">
            <div className="flash-main">
              <div className="flash-info">
                <h3>{flash.design}</h3>
                <div className="flash-details">
                  <span className="detail-badge">{flash.style}</span>
                  <span className="detail-badge">{flash.size}</span>
                  <span className="price">${flash.price}</span>
                </div>
              </div>
              <div
                className={`status-badge ${flash.status.toLowerCase()}`}
              >
                {flash.status}
              </div>
            </div>

            <div className="flash-stats">
              <div className="stat-item">
                <span className="stat-icon">👁️</span>
                <span>{flash.views} views</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">❤️</span>
                <span>{flash.saves} saves</span>
              </div>
            </div>

            <div className="flash-actions">
              <button className="btn-secondary">Edit</button>
              <button className="btn-secondary">Share</button>
              <button className="btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashListings;
