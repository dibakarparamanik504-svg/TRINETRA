import "./Loading.css";

function Loading({ setName,loadingpath}) {
  setName(loadingpath);
  return (
  <div className="loading">
    <div className="loadingname"> Loading...</div>
    <div className="loadinglogo"></div>

  </div>
  );
}
export default Loading;
