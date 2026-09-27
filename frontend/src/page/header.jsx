import {IoArrowBackCircleSharp} from "react-icons/io5"
import "./HeaderStyle.css";
import { GoPerson } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function Header({name}) {
  let nagative= useNavigate();
  return (
    <div className="head">
      {name !== "Home" && name !== "AI Monitoring" && name !==  "Live Alert" && name !== "Decision" && name !== "Analysis" ?(<div className="back" onClick={()=>{nagative(-1)}}><IoArrowBackCircleSharp/></div> ):("")}
      <div className="mainname">{name}</div>
      <div className="person"><GoPerson/></div>
    </div>
  );
}

export default Header;
