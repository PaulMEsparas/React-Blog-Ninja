import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { ReactComponent as Loading } from "../../src/loading.svg";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, { method: "DELETE" }).then(() =>
      history.push("/")
    );
  };
  return (
    <div className="blog-details">
      {isLoading && (
        <div className="loading">
          <Loading />
        </div>
      )}
      {error && <div> {error}</div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
