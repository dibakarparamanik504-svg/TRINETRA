import "./FooterStyle.css";
import { GoHome } from "react-icons/go";
// import { AiFillAppstore } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { FaBell, FaRobot } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { useState } from "react";

function Footer({ name }) {
  // let [active,setactive]=useState("home");

  let navigations = [
    {
      clasatt:
        name === "Home" ||
        name === "Detection" ||
        name === "Tracking" ||
        name === "Camera Health"||
        name === "Border Memory",
      link: "/",
      icon:<GoHome />,
    },


    {
      clasatt:name === "Live Alert",
      link:"/alert",
      icon:<FaBell />,
    },

    {
      clasatt:name === "AI Monitoring",
      link:"/monitoring",
      icon:<FaBrain />,
    },

    {
      clasatt:name === "Decision",
      link:"decision",
      icon:<FaRobot />,
    },

    {
      clasatt:name === "Analysis",
      link:"/analysis",
      icon:<AiFillSignal />,
    },
  ];
  return (
    <div className="foot">
      {navigations.map((navigationitem,i) => {
        return (
          <div className={navigationitem.clasatt?  "navbox Hactives": "navbox"} key={i}>
            <Link to={navigationitem.link}>
              {navigationitem.icon}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
