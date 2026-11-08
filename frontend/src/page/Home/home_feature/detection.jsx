import "./detecteStyle.css";

import {
  FiUser,
  FiUsers,
  FiEye,
  // FiCamera,
  FiTruck,
  FiLayers,
  FiCreditCard,
  FiPackage,
  FiShield,
  FiMapPin,
  FiMoon,
  FiVideoOff,
  FiClock,
  // FiActivity,
  FiNavigation,
  FiAlertOctagon,
  FiCloud,
  FiTarget,
  FiVolume2,
  // FiAlertTriangle,
  FiCrosshair,
  FiTrendingUp,
  // FiFingerprint,
  // FiSearch,
  // FiWifi,
  // FiDatabase,
  // FiLock,
  // FiSettings,
} from "react-icons/fi";

function Detection({ setName,routedata ,headroute,title1}) {
  setName(title1);
  return (
    <div className="maindetect">
      <div>
        <Catagories headroute={headroute} />
      </div>
      <div>
        <Detectmodule routedata={routedata} />
      </div>
    </div>
  );
}

function Detectmodule({routedata}) {
  let iconstore = [
    <FiUser />,
    <FiCrosshair />,
    <FiEye />,
    <FiUsers />,
    <FiTruck />,
    <FiLayers />,
    <FiCreditCard />,
    <FiPackage />,
    <FiShield />,
    <FiMapPin />,
    <FiMoon />,
    <FiVideoOff />,
    <FiClock />,
    <FiUsers />,
    <FiNavigation />,
    <FiAlertOctagon />,
    <FiCloud />,
    <FiTarget />,
    <FiTrendingUp/>,
    <FiVolume2 />,
    
  ];
  return (
    <div className="modulecont">
      {routedata.map((detect, i) => {
        // console.log()
        return (
          <div className="modulecls" key={i}>
            <div className="cls1">
              <div className="logocls">{iconstore[i]}</div>
              <div>
                <div className="namecls">{detect.name}</div>
                <div className="catagorycls">{detect.category}</div>
              </div>
              <div className="countcls">{detect.count}</div>
            </div>
            <div className="cls2">{detect.description}</div>
            <div className="cls3">
              <div className="statuscls">{detect.status}</div>
              <div className="prioritycls">{detect.priority}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Catagories({headroute}) {
  return (
    <div className="catagories">
      <div>
        <input
          className="searchbox"
          type="text"
          placeholder="Search Detection Module..."
        />
      </div>
      <div>
        <select className="selectbox">
          {headroute.map((catagori, i) => {
            return (
              <div key={i}>
                <option value={catagori.name}>{catagori.name}</option>
              </div>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Detection;
