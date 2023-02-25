import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="section">
        <h2>Welcome to the Home Page !</h2>
        <p>
          So We are Pasting the Outlet Component in order to Share the nested
          pages layout.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum est,
          obcaecati nemo eius animi perferendis quam, quaerat veritatis rerum,
          odio vel! Optio iste nulla magni ad quisquam officia maiores quos?
        </p>
        <Link to="/about" class="btn">
          About Page
        </Link>


        <br />
        <br />
        <Link to="/products" className="btn">
          Products Page
        </Link>
      </section>
    </>
  );
};
export default Home;
