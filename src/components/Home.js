// import { useState, useEffect } from "react";
import { ReactComponent as Loading } from "../../src/loading.svg";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isLoading && (
        <div className="loading">
          <Loading />
        </div>
      )}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
