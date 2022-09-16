import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to Home...</Link>
    </div>
  );
};

export default Page404;
