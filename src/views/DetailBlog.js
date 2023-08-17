import { useParams } from "react-router-dom";

const DetailBlog = () => {
  let { id } = useParams();
  console.log(">>> check use params :", useParams());
  return <h1>hello detail blog with {id}</h1>;
};

export default DetailBlog;
