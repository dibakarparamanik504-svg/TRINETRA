import Header from "../header";
import Footer from "../footer";

function HomePage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1>Wellcome to Trinetra web app</h1>
      <h2>This is a a AI power video analysis app</h2>
      <div className="footernav">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
