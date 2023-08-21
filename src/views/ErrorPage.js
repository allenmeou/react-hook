import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./ErrorPage.scss";
const ErrorPage = () => {
  let history = useHistory();

  const handleClickBackHome = () => {
    history.push("/");
  };

  return (
    <>
      <div className="container">
        <div className="gif">
          <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
        </div>
        <div className="content">
          <h1 className="main-heading">This page is gone.</h1>
          <p>
            ...maybe the page you're looking for is not found or never existed.
          </p>
          <button className="btn-back-home" onClick={handleClickBackHome}>
            Back to home <i className="far fa-hand-point-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
