import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem("appointments");
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });

  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );
  }, [appointments]);

  const addAppointment = () => {
    if (editingId) {
      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === editingId
          ? {
              ...appointment,
              name,
              time,
            }
          : appointment
      );

      setAppointments(updatedAppointments);
      setEditingId(null);
    } else {
      const newAppointment = {
        id: Date.now(),
        name,
        time,
      };

      setAppointments([...appointments, newAppointment]);
    }

    setName("");
    setTime("");
  };

  const deleteAppointment = (id) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );

    setAppointments(updatedAppointments);
  };

  const editAppointment = (appointment) => {
    setName(appointment.name);
    setTime(appointment.time);
    setEditingId(appointment.id);
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="dashboard">
      
      <section className="dashboard-container">
        <h1 className="dashboard-title">Appointment Dashboard</h1>

        <h3 className="dashboard-subtitle">
          Manage your daily appointments
        </h3>

        <div className="stats-container">
          <div className="stats-card">
            <p>Total Appointments</p>
            <h2>{appointments.length}</h2>
          </div>

          <div className="stats-card">
            <p>Found</p>
            <h2>{filteredAppointments.length}</h2>
          </div>
        </div>

        <div className="form-container">
          <input
            type="text"
            placeholder="Client name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button onClick={addAppointment}>
            {editingId
              ? "Update Appointment"
              : "Add Appointment"}
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search appointment"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h2>Appointments</h2>

        {filteredAppointments.map((appointment) => (
          <div
            className="appointment-card"
            key={appointment.id}
          >
            <div>
              <h3>{appointment.name}</h3>
              <p>Haircut Appointment</p>
            </div>

            <div className="appointment-actions">
              <span>{appointment.time}</span>

              <button
                onClick={() =>
                  editAppointment(appointment)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteAppointment(appointment.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;