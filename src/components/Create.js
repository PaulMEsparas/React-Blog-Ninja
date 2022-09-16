import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const [newBlog, setNewBlog] = useState({
    title: "",
    body: "",
    author: "Mario",
  });
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      // history.go(-1);
      setTimeout(() => history.push("/"), 1000);
    });
  };

  return (
    <div className="create">
      <h2>Add a blog!</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title :</label>
        <input
          name="title"
          value={newBlog.title}
          onChange={handleChange}
          type="text"
          required
        />
        <label>Blog content :</label>
        <textarea
          onChange={handleChange}
          name="body"
          value={newBlog.body}
          required
        ></textarea>
        <label> Blog Author :</label>
        <select name="author" value={newBlog.author} onChange={handleChange}>
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding ...</button>}
      </form>
    </div>
  );
};

export default Create;
