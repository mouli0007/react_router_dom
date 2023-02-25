import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  const { image, name } = product;
  return (
    <section className="section product">
      <h2>Single Product !</h2>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products" className="btn">
        Back To Products
      </Link>
    </section>
  );
};

export default SingleProduct;
