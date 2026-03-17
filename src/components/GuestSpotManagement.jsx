import { useState } from 'react';
import './GuestSpotManagement.css';

const mockGuestSpots = [
  {
    id: 1,
    studio: 'Rebel Ink Studio',
    city: 'New York',
    state: 'NY',
    startDate: '2026-04-15',
    endDate: '2026-04-20',
    status: 'Confirmed',
    notes: 'Bringing fine line flash book',
  },
  {
    id: 2,
    studio: 'Sacred Art Tattoo',
    city: 'Miami',
    state: 'FL',
    startDate: '2026-05-01',
    endDate: '2026-05-07',
    status: 'Pending',
    notes: 'Traditional and neo-traditional pieces',
  },
  {
    id: 3,
    studio: 'Black Rose Collective',
    city: 'Austin',
    state: 'TX',
    startDate: '2026-03-10',
    endDate: '2026-03-14',
    status: 'Completed',
    notes: 'Great experience, high booking rate',
  },
];

function GuestSpotManagement() {
  const [guestSpots] = useState(mockGuestSpots);

  return (
    <div className="guest-spot-management">
      <div className="section-header">
        <h2>Guest Spot Management</h2>
        <button className="btn-primary">Add Guest Spot</button>
      </div>

      <div className="guest-spot-stats">
        <div className="stat-box">
          <div className="stat-label">Upcoming</div>
          <div className="stat-value">
            {guestSpots.filter((s) => s.status === 'Confirmed').length}
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Pending</div>
          <div className="stat-value">
            {guestSpots.filter((s) => s.status === 'Pending').length}
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Completed</div>
          <div className="stat-value">
            {guestSpots.filter((s) => s.status === 'Completed').length}
          </div>
        </div>
      </div>

      <div className="guest-spot-list">
        {guestSpots.map((spot) => (
          <div key={spot.id} className="guest-spot-card">
            <div className="spot-header">
              <div className="spot-main-info">
                <h3>{spot.studio}</h3>
                <div className="spot-location">
                  {spot.city}, {spot.state}
                </div>
              </div>
              <div className={`spot-status ${spot.status.toLowerCase()}`}>
                {spot.status}
              </div>
            </div>

            <div className="spot-dates">
              <div className="date-item">
                <span className="date-label">Start:</span>
                <span className="date-value">{spot.startDate}</span>
              </div>
              <div className="date-item">
                <span className="date-label">End:</span>
                <span className="date-value">{spot.endDate}</span>
              </div>
            </div>

            <div className="spot-notes">
              <strong>Notes:</strong> {spot.notes}
            </div>

            <div className="spot-actions">
              <button className="btn-secondary">View Details</button>
              <button className="btn-secondary">Edit</button>
              {spot.status === 'Pending' && (
                <button className="btn-primary-small">Confirm</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestSpotManagement;
