import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../customize/fetchBlog";
import "./Blog.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data: dataBlogs, loading: setLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    false
  );

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let newDataSimple = dataBlogs.slice(0, 10);
      setNewData(newDataSimple);
    }
  }, [dataBlogs]);

  // add blog new
  const handleAddNew = (blog) => {
    let data = newData;
    newData.unshift(blog);

    setShow(false);
    setNewData(data);
  };

  // delete post with id blog
  const handleDeletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  return (
    <>
      <>
        <Button variant="primary" onClick={handleShow}>
          <i className="fa-solid fa-plus icon-plus-post"></i> Add New Blog
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewBlog handleAddNew={handleAddNew} />
          </Modal.Body>
        </Modal>
      </>

      <div className="blogs-container">
        {setLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div key={item.id} className="single-blog">
                <div className="title"> {item.title}</div>
                <div className="content">{item.body}</div>
                <div className="btn-post">
                  <button>
                    <Link to={`/blog/${item.id}`}> View Detail</Link>
                  </button>
                  <div>
                    <button>Edit</button>
                    <button
                      style={{ marginLeft: 20 }}
                      onClick={() => handleDeletePost(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        {setLoading === true && (
          <>
            <span className="loading-blog">loading blogs...</span>
          </>
        )}
      </div>
    </>
  );
};

export default Blog;
