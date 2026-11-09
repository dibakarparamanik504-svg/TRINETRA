import "./alertanalysis.css";
import {IoIosAddCircle,IoIosPulse,IoIosCheckmarkCircle,IoIosCloseCircle,IoIosSend,IoIosDownload} from "react-icons/io"
function Alertanalysis({ setName, alertsdata }) {
  setName(alertsdata.type);
  let indentity = [
    {
      names: "Camera Proof",
      components: <Cameraproof />,
    },
    {
      names: "Alert Details :",
      components: <Bodyalert alertsdata={alertsdata} />,
    },
    {
      names: "Spcial Funcation",
      components: <Specialfunc />,
    },
  ];
  return (
    <div className="mainalertanalysis">
      {indentity.map((ids, i) => {
        return (
          <div className="parentbody" key={i}>
            <div className="parentname">{ids.names}</div>
            <div>{ids.components}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Alertanalysis;

function Specialfunc() {
  let lists = [
    {
      Name: "Make Decision",
      logo: <IoIosAddCircle/>,
    },
    {
      Name: "Analysis",
      logo: <IoIosPulse/>,
    },
    {
      Name: "True Error",
      logo:<IoIosCheckmarkCircle/>,
    },
    {
      Name: "False Error",
      logo: <IoIosCloseCircle/>,
    },
    {
      Name: "Share",
      logo: <IoIosSend/>,
    },
    {
      Name: "Download",
      logo: <IoIosDownload/>,
    },
  ];
  return (
    <div className="listcls1">
      {lists.map((list,i) => {
        return (
          <div className="listscls2" key={i}>
            <div className="listlogo">{list.logo}</div>
            <div className="listname">{list.Name}</div>
          </div>
        );
      })}
    </div>
  );
}

function Cameraproof() {
  return (
    <div className="proof1">
      <div className="proof2">
        <div className="loading1">
          <div className="loadinglogo1"></div>
        </div>
      </div>
    </div>
  );
}

function Bodyalert({ alertsdata }) {
  return (
    <div>
      <hr />
      <div className="bodycomponent">
        <div className="child1">Error Name :</div>
        <div className="child2">{alertsdata.title}</div>
      </div>
      <hr />
      <div className="bodycomponent">
        <div className="child1">Type :</div>
        <div className="child2">{alertsdata.type}</div>
      </div>
      <hr />

      <div className="bodycomponent">
        <div className="child1">ID :</div>
        <div className="child2">{alertsdata.id}</div>
      </div>
      <hr />

      <div className="bodycomponent">
        <div className="child1">Camera :</div>
        <div className="child2">{alertsdata.camera}</div>
      </div>
      <hr />

      <div className="bodycomponent">
        <div className="child1">Zone :</div>
        <div className="child2">{alertsdata.zone}</div>
      </div>
      <hr />

      <div className="bodycomponent">
        <div className="child1">Date :</div>
        <div className="child2">{alertsdata.date}</div>
      </div>
      <hr />

      <div className="bodycomponent">
        <div className="child1">Time:</div>
        <div className="child2">{alertsdata.time}</div>
      </div>
      <hr />

      <div className="bodycomponent">
        <div className="child1">Severity :</div>
        <div className="child2">{alertsdata.severity}</div>
      </div>
      <hr />

      <div className="bodycomponent">
        <div className="child1">Confidence :</div>
        <div className="child2">{alertsdata.confidence}</div>
      </div>
      <hr />

      <div className="bodycomponent">
        <div className="child1">Status:</div>
        <div className="child2">{alertsdata.status}</div>
      </div>
      <hr />

      <div className="bodycomponent">
        <div className="child1">AssignedTo:</div>
        <div className="child2">{alertsdata.assignedTo}</div>
      </div>
      <hr />
    </div>
  );
}
