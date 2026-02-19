import { useState } from "react";
import ProfileCard from "./components/ProfileCard.jsx";
import StatusPanel from "./components/StatusPanel.jsx";
import UserPhoto from "./components/UserPhoto.jsx";

const App = () => {
  const [user, setUser] = useState({
    name: "Siri ",
    role: "Frontend Developer",
    status: "Active",
    photo: "/profile.png"
  });

  const toggleStatus = () => {
    setUser(prev => ({
      ...prev,
      status: prev.status === "Active" ? "Inactive" : "Active"
    }));
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>User Information Dashboard</h1>

      <UserPhoto src={user.photo} alt={user.name} />

      <ProfileCard name={user.name} role={user.role} />

      <StatusPanel status={user.status} onToggle={toggleStatus} />
    </div>
  );
};

export default App;
