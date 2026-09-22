import Header from "./header";
import Footer from "./footer";
import "../style/HomeStyle.css";
import photo from "../img/india.jpg";

function HomePage() {
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
        <Header />
      </div>
      <div className="maincontain">
        <div className="imgcont">
          <img className="imge" src={photo} alt="" width=" 100%" />
        </div>
        <div>
          <div className="det">Detection</div>
          <div className="contener box1">
            {detect.map((detiteam) => {
              return <button className="contbox">{detiteam}</button>;
            })}
          </div>
        </div>
        <div className="det">Tracking</div>
        <div className="contener box2">
          {tracking.map((traitem) => {
            return <button className="contbox">{traitem}</button>;
          })}
        </div>

        <div className="det">Other</div>
        <div className="contener box2">
          {other.map((othitem) => {
            return <button className="contbox">{othitem}</button>;
          })}
        </div>
      </div>
      <div className="footernav">
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
