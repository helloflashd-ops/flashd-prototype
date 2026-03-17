import { useState } from 'react';
import './BookingRequests.css';

const mockBookings = [
  {
    id: 1,
    clientName: 'Sarah Martinez',
    design: 'Minimalist Moon',
    date: '2026-03-20',
    time: '2:00 PM',
    status: 'Pending',
    message: 'I love the minimalist moon design! Would prefer it on my wrist.',
    requestedDate: '2026-03-15',
  },
  {
    id: 2,
    clientName: 'James Wilson',
    design: 'Traditional Rose',
    date: '2026-03-18',
    time: '11:00 AM',
    status: 'Confirmed',
    message: 'Looking forward to getting this piece!',
    requestedDate: '2026-03-14',
  },
  {
    id: 3,
    clientName: 'Emily Chen',
    design: 'Watercolor Flower',
    date: '2026-03-22',
    time: '4:00 PM',
    status: 'Pending',
    message: 'Can we adjust the colors to be more blue/purple tones?',
    requestedDate: '2026-03-15',
  },
  {
    id: 4,
    clientName: 'Marcus Johnson',
    design: 'Snake Dagger',
    date: '2026-03-19',
    time: '1:00 PM',
    status: 'Pending',
    message: 'First tattoo, a bit nervous but excited!',
    requestedDate: '2026-03-14',
  },
];

function BookingRequests() {
  const [bookings] = useState(mockBookings);

  const pendingCount = bookings.filter((b) => b.status === 'Pending').length;
  const confirmedCount = bookings.filter(
    (b) => b.status === 'Confirmed'
  ).length;

  return (
    <div className="booking-requests">
      <div className="section-header">
        <h2>Booking Requests</h2>
        <div className="filter-buttons">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Pending ({pendingCount})</button>
          <button className="filter-btn">Confirmed ({confirmedCount})</button>
        </div>
      </div>

      <div className="booking-overview">
        <div className="overview-card">
          <div className="overview-icon pending-icon">⏳</div>
          <div className="overview-content">
            <div className="overview-number">{pendingCount}</div>
            <div className="overview-label">Pending Requests</div>
          </div>
        </div>
        <div className="overview-card">
          <div className="overview-icon confirmed-icon">✓</div>
          <div className="overview-content">
            <div className="overview-number">{confirmedCount}</div>
            <div className="overview-label">Confirmed Bookings</div>
          </div>
        </div>
      </div>

      <div className="bookings-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <div className="booking-header">
              <div className="client-info">
                <div className="client-avatar">
                  {booking.clientName.charAt(0)}
                </div>
                <div className="client-details">
                  <h3>{booking.clientName}</h3>
                  <div className="design-name">{booking.design}</div>
                </div>
              </div>
              <div className={`booking-status ${booking.status.toLowerCase()}`}>
                {booking.status}
              </div>
            </div>

            <div className="booking-info">
              <div className="info-row">
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <span className="info-text">{booking.date}</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">🕒</span>
                  <span className="info-text">{booking.time}</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📨</span>
                  <span className="info-text">
                    Requested {booking.requestedDate}
                  </span>
                </div>
              </div>
            </div>

            <div className="booking-message">
              <strong>Message:</strong>
              <p>{booking.message}</p>
            </div>

            <div className="booking-actions">
              {booking.status === 'Pending' ? (
                <>
                  <button className="btn-accept">Accept</button>
                  <button className="btn-secondary">Reschedule</button>
                  <button className="btn-decline">Decline</button>
                </>
              ) : (
                <>
                  <button className="btn-secondary">View Details</button>
                  <button className="btn-secondary">Message Client</button>
                  <button className="btn-decline">Cancel</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingRequests;
