import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center my-5" style={{paddingBottom: '180px', paddingTop: '200px'}}>
      <h1 className="h2 mb-5">
        404 <br />
        Page Not Found
      </h1>
      <p>Sorry, the page you were looking for does not exist.</p>
      <p>Go To Homepage by Button Below</p>
      <Link to="/" className="btn btn-outline-primary">
        Home Page
      </Link>
    </div>
  );
};

export default NotFound;
