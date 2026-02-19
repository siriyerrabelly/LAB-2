const ProfileCard = ({ name, role }) => {
  return (
    <div style={{
      border: "1px solid #2b2e32",
      padding: "15px",
      borderRadius: "10px",
      margin: "10px auto",
      width: "500px"
    }}>
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
};

export default ProfileCard;
