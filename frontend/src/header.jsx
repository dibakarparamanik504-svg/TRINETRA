import "./App.css";
import profile from "./img/profile.png"

function Header() {
  return (
    <div className="head">
      <div className="MainName">Welcome Solder !</div>
      <div>
        <img
          src={profile}
          alt="profile"
          width="100px"
          height="200px"
          className="ima"
        />
      </div>
    </div>
  );
}

export default Header;
