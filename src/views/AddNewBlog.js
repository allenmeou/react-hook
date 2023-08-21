import { useState } from "react";

import "./AddNewBlog.scss";

const AddNewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    console.log("check data state:", title, content);
  };

  return (
    <div className="form-container">
      <form className="form">
        <div>
          <h2>Add New Blog</h2>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title </label>
          <input
            type="text"
            id="title"
            name="title"
            required=""
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Content</label>
          <textarea
            name="textarea"
            id="textarea"
            rows="10"
            cols="50"
            required=""
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          className="form-submit-btn"
          type="submit"
          onClick={(e) => {
            handleSubmitBtn(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewBlog;
