import "./alert.css";
import { MdSecurity } from "react-icons/md";
function Dashboard({ setName }) {
  setName("Live Alert");

  return (
    <div className="maindash">
      <div className="mainaleheader">
        <SecurityAlert/>
      </div>
      <div>
        <Filteroptipn/>
      </div>
    </div>
  );
}

export default Dashboard;

function Filteroptipn (){
    return(
        <div>
            <div>
                <input type="text" name="search"/>
            </div>
        </div>
    );

}

function SecurityAlert(){
    let aleheader = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
    return(
        <div>
        <div className="title1">
          <div>
            <MdSecurity />
          </div>
          Security Alert
        </div>
        <div className="cls1aleheader">
          {aleheader.map((item, i) => {
            return <div key={i} className="aleheader"></div>;
          })}
        </div>
        </div>
    );
}
