import useFetch from "../customize/fetchBlog";
import "./Blog.scss";

import { Link } from "react-router-dom";

const Blog = () => {
  const { data: dataBlogs, loading: setLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    false
  );

  let newData = [];

  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 10);
  }

  return (
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
  );
};

export default Blog;
