import { useParams, useHistory } from "react-router-dom";

import "./DatailBlog.scss";

const DetailBlog = () => {
  let history = useHistory();
  function handleClickBackBlog() {
    history.push("/blog");
  }

  let { id } = useParams();

  return (
    <>
      <button onClick={handleClickBackBlog}>Back</button>
      <h1>hello detail blog with {id}</h1>
    </>
  );
};

export default DetailBlog;
