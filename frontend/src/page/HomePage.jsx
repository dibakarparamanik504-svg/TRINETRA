import Header from "../header";
import Footer from "../footer";
import "../style/HomeStyle.css"

function HomePage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="maincontain">
        <h1>Wellcome to Trinetra web app</h1>
        <h2>This is a a AI power video analysis app</h2>
      </div>
      <div className="footernav">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
