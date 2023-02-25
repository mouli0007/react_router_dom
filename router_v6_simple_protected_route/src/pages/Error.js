import { Link, Outlet } from "react-router-dom";
const Error = () => {
  return (
    <section className="section">
      <h2>Error</h2>
      <p>404 Page Not Found !</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
      <Outlet />
    </section>
  );
};
export default Error;
