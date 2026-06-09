import { useState } from "react";

function StatsCard() {
  const [totalAppointments, setTotalAppointments] = useState(12);

  return (
    <section className="stats-grid">
      <div className="stats-card">
        <p>Total Appointments</p>
        <h2>{totalAppointments}</h2>

        <button
          onClick={() => setTotalAppointments(totalAppointments + 1)}
        >
          Add Appointment
        </button>
      </div>

      <div className="stats-card">
        <p>Today</p>
        <h2>5</h2>
      </div>

      <div className="stats-card">
        <p>Pending</p>
        <h2>3</h2>
      </div>
    </section>
  );
}

export default StatsCard;