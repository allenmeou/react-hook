import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetchBlog";

import "./DatailBlog.scss";

const DetailBlog = () => {
  let { id } = useParams();

  let history = useHistory();

  function handleClickBackBlog() {
    history.push("/blog");
  }

  const { data: dataBlogDetail, loading: setLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    false
  );

  return (
    <>
      <button onClick={handleClickBackBlog}>Back</button>
      <div className="blog-detail">
        {setLoading === false && dataBlogDetail && (
          <>
            <div className="title">
              Blog ID : {id} - {dataBlogDetail.title}
            </div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
        {setLoading === true && (
          <>
            <span style={{ margin: "0 auto" }}>loading ...</span>
          </>
        )}
      </div>
    </>
  );
};

export default DetailBlog;
