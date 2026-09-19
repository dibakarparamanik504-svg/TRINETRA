import "./style/HeaderStyle.css";
import { GoPerson } from "react-icons/go";

function Header() {
  return (
    <div className="head">
      <div className="MainName">Welcome Solder !</div>
      <div className="person"><GoPerson/></div>
    </div>
  );
}

export default Header;
