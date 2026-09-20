import "../style/HeaderStyle.css";
import { GoPerson } from "react-icons/go";

function Header() {
  let nam = "TRINETRA"
  return (
    <div className="head">
      <div className="mainname">{nam}</div>
      <div className="person"><GoPerson/></div>
    </div>
  );
}

export default Header;
