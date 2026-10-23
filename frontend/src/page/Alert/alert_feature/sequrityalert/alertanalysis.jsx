import "./alertanalysis.css"

function Alertanalysis({setName,title}) {
    setName("Alert Analysis")
    console.log(title)
  return (
    <div className="mainalertanalysis">alertanalysis {title}</div>
  )
}
export default Alertanalysis;