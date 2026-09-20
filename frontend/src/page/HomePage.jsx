import Header from "./header";
import Footer from "./footer";
import "../style/HomeStyle.css"

function HomePage() {
  let detect=["Human Detect","Face Detect","ANPR Detect","Vechicle Detect","Dark Activity","Environment Detect","Vertual Fenceintrusion","Behavior Detection"]
  let tracking=["Night Time Movement","Suspicious Activity","Camera Health","Distance","Direction","Network"]
  let other=["Create Report ","Audio Visual"]

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="maincontain">
        <div className="det">Detection</div>
        <div className="contener">
          {detect.map((iteam)=>{
            return(
              <div className="contbox">{iteam}</div>
            );
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
