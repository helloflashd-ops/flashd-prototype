import { useState } from 'react';
import './AvailabilityCalendar.css';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const mockSchedule = {
  Mon: [
    { id: 1, time: '10:00 AM - 2:00 PM', status: 'Available' },
    { id: 2, time: '3:00 PM - 7:00 PM', status: 'Booked' },
  ],
  Tue: [{ id: 3, time: '11:00 AM - 5:00 PM', status: 'Available' }],
  Wed: [{ id: 4, time: '10:00 AM - 6:00 PM', status: 'Available' }],
  Thu: [
    { id: 5, time: '12:00 PM - 4:00 PM', status: 'Booked' },
    { id: 6, time: '5:00 PM - 8:00 PM', status: 'Available' },
  ],
  Fri: [{ id: 7, time: '10:00 AM - 6:00 PM', status: 'Available' }],
  Sat: [{ id: 8, time: '12:00 PM - 8:00 PM', status: 'Available' }],
  Sun: [],
};

function AvailabilityCalendar() {
  const [schedule] = useState(mockSchedule);

  return (
    <div className="availability-calendar">
      <div className="section-header">
        <h2>Availability & Schedule</h2>
        <button className="btn-primary">Add Time Slot</button>
      </div>

      <div className="quick-stats">
        <div className="quick-stat">
          <div className="stat-number">24</div>
          <div className="stat-text">Hours Available This Week</div>
        </div>
        <div className="quick-stat">
          <div className="stat-number">6</div>
          <div className="stat-text">Booked Sessions</div>
        </div>
      </div>

      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-column">
            <div className="day-header">{day}</div>
            <div className="time-slots">
              {schedule[day]?.length > 0 ? (
                schedule[day].map((slot) => (
                  <div
                    key={slot.id}
                    className={`time-slot ${slot.status.toLowerCase()}`}
                  >
                    <div className="slot-time">{slot.time}</div>
                    <div className="slot-status">{slot.status}</div>
                    <button className="slot-edit">Edit</button>
                  </div>
                ))
              ) : (
                <div className="no-slots">No slots</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="availability-notes">
        <h3>Availability Notes</h3>
        <textarea
          placeholder="Add any special notes about your availability (e.g., vacation dates, special hours, etc.)"
          rows="4"
        />
        <button className="btn-secondary">Save Notes</button>
      </div>
    </div>
  );
}

export default AvailabilityCalendar;
