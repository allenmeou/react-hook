import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
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

  const handleAddNew = (blog) => {
    let data = newData;
    newData.unshift(blog);

    setShow(false);
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
