import "./alertanalysis.css";
import {IoIosCloseCircleOutline} from "react-icons/io"

function Alertanalysis({title,body,check,setCheck}) {
  return (
    <div>
      {check === true ?
      <div className="mainalertanalysis">
        <div className="header">
          <div className="title"> {title} </div>
          <div className="logo" onClick={()=>setCheck(false)}><IoIosCloseCircleOutline/></div>
        </div>
        <hr />
        <div className="body">{body}</div>
        <hr />
        <div className="footer"></div>
      </div>
      :""}
    </div>
  );
}
export default Alertanalysis;
