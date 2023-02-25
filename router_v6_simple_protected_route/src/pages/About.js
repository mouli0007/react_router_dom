import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section className="section">
        <h2>About</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quas
          obcaecati perspiciatis aliquam ipsum a asperiores delectus sit
          laudantium deserunt.
        </p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </section>
    </>
  );
};

export default About;
