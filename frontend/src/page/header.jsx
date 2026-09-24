
import "../style/HeaderStyle.css";
import { GoPerson } from "react-icons/go";

function Header({name}) {
  return (
    <div className="head">
      <div className="mainname">{name}</div>
      <div className="person"><GoPerson/></div>
    </div>
  );
}

export default Header;
