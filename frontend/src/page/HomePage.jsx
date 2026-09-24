
import "../style/HomeStyle.css";
// import photo from "../img/india.jpg";

function HomePage({setName}) {
  setName("Home Page");
  let detect = [
    "Human Detect",
    "Face Detect",
    "ANPR Detect",
    "Vechicle Detect",
    "Dark Activity",
    "Environment Detect",
    "Vertual Fenceintrusion",
    "Behavior Detection",
  ];
  let tracking = [
    "Night Time Movement",
    "Suspicious Activity",
    "Camera Health",
    "Distance",
    "Direction",
    "Network",
  ];
  let other = ["Create Report ", "Audio Visual"];

  return (
    <div>
      <div>
       
      </div>
      <div className="imge">
        <div className="titlename">AI POWERED INTELLIGENT BOPRDER SURVEILLANCE PLATFROM</div>
        <div className="surname">TRINETRA Providing low Bandwidth Network, real-time Detaction,Tracking, Threat Detection, fast and real time response without expensive hardware </div>
        <button className="titlebtn">GET STARTED</button>
      </div>



      <div className="maincontain">
        {/*main css class*/}
        <div className="det">Detection</div>
        <div>
          <div className="contener">
            {detect.map((detiteam,i) => {
              return <button className="contbox" key={i}>{detiteam}</button>;
            })}
          </div>
        </div>
        <div className="det">Tracking</div>
        <div className="contener">
          {tracking.map((traitem,i) => {
            return <button className="contbox" key={i}>{traitem}</button>;
          })}
        </div>
        <div className="det">Other</div>
        <div className="contener">
          {other.map((othitem,i) => {
            return <button className="contbox" key={i}>{othitem}</button>;
          })}
        </div>
      </div>
      <div className="footernav">
        
      </div>
    </div>
  );
}
export default HomePage;
