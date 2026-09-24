import "../style/FooterStyle.css";
import { GoHome } from "react-icons/go";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer({setName}){
    return(
        <div className="foot">
            <div className="homebox box"><Link to="/home"><GoHome/></Link></div>
            <div className="dashbox"><Link to="/dashboard"><AiFillAppstore/></Link></div>
            <div className="monebox"><Link to="/monitoring"><FaBrain/></Link></div>
            <div className="disbox" ><Link to="decision"><FaRobot/></Link></div>
            <div className="analbox"><Link to="/analysis"><AiFillSignal/></Link></div>
        </div>

    );

}

export default Footer;