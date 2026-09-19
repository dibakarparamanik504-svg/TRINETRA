import "./style/FooterStyle.css";
import { GoHome } from "react-icons/go";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";

function Footer(){
    return(
        <div className="foot">
            <div className="homebox"><GoHome/></div>
            <div className="dashbox"><AiFillAppstore/></div>
            <div className="monebox"><FaBrain/></div>
            <div className="disbox"><FaRobot/></div>
            <div className="analbox"><AiFillSignal/></div>
        </div>

    );

}

export default Footer;