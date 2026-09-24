import "../style/dashboard.css"

function Dashboard({setName}){
    setName("Dashboard");
    return(
        <div className="maindash">
           <h1> welcome dashboard</h1>
        </div>
    );
}

export default Dashboard;