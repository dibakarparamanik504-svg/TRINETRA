import "../style/FooterStyle.css";
import { GoHome } from "react-icons/go";
// import { AiFillAppstore } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { FaBell, FaRobot } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { useState } from "react";

function Footer({name}){
    // let [active,setactive]=useState("home");
    return(
        <div className="foot">
            <div className={name === "Home Page" ?( "homebox Hactives") : ("homebox")}><Link to="/"><GoHome/></Link></div>

            <div className={name === "Dashboard" ? ("dashbox Dactives") : ("dashbox")}><Link to="/dashboard"><FaBell/></Link></div>

            <div className={name === "AI Monitoring" ? ("dashbox Mactives") : ("dashbox")}><Link to="/monitoring"><FaBrain/></Link></div>

            <div className={name === "Decision" ? ("dashbox Diactives") : ("dashbox")}><Link to="decision"><FaRobot/></Link></div>

            <div className={name === "Analysis" ? ("dashbox Aactives") : ("dashbox")}><Link to="/analysis"><AiFillSignal/></Link></div>
        </div>

    );

}

export default Footer;