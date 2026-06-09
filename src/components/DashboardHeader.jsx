function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">Barber admin</p>
        <h1>Appointment Dashboard</h1>
      </div>

      <button className="header-button">New appointment</button>
    </header>
  );
}

export default DashboardHeader;