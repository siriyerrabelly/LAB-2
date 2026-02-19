const UserPhoto = ({ src, alt }) => (
  <div style={{ margin: "0px auto" }}>
    <img src={src} alt={alt} style={{ borderRadius: "100%", width: "250px", height: "250px" }} />
  </div>
);

export default UserPhoto;
