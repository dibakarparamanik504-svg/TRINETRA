import "../style/FooterStyle.css";
import { GoHome } from "react-icons/go";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer(){
    let [active,setactive]=useState("home");
    return(
        <div className="foot">
            <div className={active === "home" ?( "homebox Hactives") : ("homebox")} onClick={()=>{setactive("home")}}><Link to="/home"><GoHome/></Link></div>
            <div className={active === "dash" ? ("dashbox Dactives") : ("dashbox")} onClick={()=>{setactive("dash")}}><Link to="/dashboard"><AiFillAppstore/></Link></div>
            <div className={active === "mon" ? ("dashbox Mactives") : ("dashbox")} onClick={()=>{setactive("mon")}}><Link to="/monitoring"><FaBrain/></Link></div>
            <div className={active === "dis" ? ("dashbox Diactives") : ("dashbox")} onClick={()=>{setactive("dis")}}><Link to="decision"><FaRobot/></Link></div>
            <div className={active === "ana" ? ("dashbox Aactives") : ("dashbox")} onClick={()=>{setactive("ana")}}><Link to="/analysis"><AiFillSignal/></Link></div>
        </div>

    );

}

export default Footer;