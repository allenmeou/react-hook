import { Link } from "react-router-dom";

import useFetch from "../customize/fetchBlog";
import "./Blog.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Blog = () => {
  const { data: dataBlogs, loading: setLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    false
  );

  let newData = [];

  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 10);
  }

  let history = useHistory();

  const handleAddNew = () => {
    history.push("/add-new-blog");
  };

  return (
    <>
      <div>
        <button onClick={handleAddNew}>
          <i className="fa-solid fa-plus icon-plus-post"></i>Add new blog
        </button>
      </div>
      <div className="blogs-container">
        {setLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div key={item.id} className="single-blog">
                <div className="title"> {item.title}</div>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}> View Detail</Link>
                </button>
              </div>
            );
          })}

        {setLoading === true && (
          <>
            <span style={{ margin: "0 auto" }}>loading blogs...</span>
          </>
        )}
      </div>
    </>
  );
};

export default Blog;
