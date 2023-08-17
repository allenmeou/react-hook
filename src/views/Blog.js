import useFetch from "../customize/fetchBlog";
import "./Blog.scss";

const Blog = () => {
  const { data: dataBlogs, loading: isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    false
  );

  let newData = [];

  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 10);
  }

  return (
    <div className="blogs-container">
      {newData &&
        newData.length > 0 &&
        newData.map((item) => {
          return (
            <div key={item.id} className="single-blog">
              <div className="title"> {item.title}</div>

              <div className="content">{item.body}</div>
              <button>View Detail</button>
            </div>
          );
        })}
    </div>
  );
};

export default Blog;
