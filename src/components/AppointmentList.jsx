const appointments = [
  {
    id: 1,
    name: "Juan Pérez",
    service: "Haircut + Beard",
    time: "10:00 AM",
  },
  {
    id: 2,
    name: "Carlos Rojas",
    service: "Classic Cut",
    time: "11:30 AM",
  },
  {
    id: 3,
    name: "Andrés Mora",
    service: "Fade Cut",
    time: "2:00 PM",
  },
];

function AppointmentList() {
  return (
    <section className="appointments-card">
      <h2>Today's Appointments</h2>

      {appointments.map((appointment) => (
        <div className="appointment-item" key={appointment.id}>
          <div>
            <h3>{appointment.name}</h3>
            <p>{appointment.service}</p>
          </div>

          <span>{appointment.time}</span>
        </div>
      ))}
    </section>
  );
}

export default AppointmentList;