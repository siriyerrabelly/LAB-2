const StatusPanel = ({ status, onToggle }) => {
  const statusColor = status === "Active" ? "green" : "red";

  return (
    <div style={{
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #393d41",
      margin: "10px auto",
      width: "500px"
    }}>
      <p style={{ color: statusColor, fontWeight: "bold" }}>Status: {status}</p>
      <button onClick={onToggle}>Toggle Status</button>
    </div>
  );
};

export default StatusPanel;
