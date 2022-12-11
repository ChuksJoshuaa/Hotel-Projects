import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="page-100">
      <section className="d-flex flex-column justify-content-center align-items-center text-center">
        <h1 style={{ fontSize: "10rem" }}>404</h1>
        <h3 className="mb-3">Sorry, the page you tried cannot be found </h3>
        <Link
          to="./"
          className="error-btn"
          style={{ textTransform: "none", textDecoration: "none" }}
        >
          BACK HOME
        </Link>
      </section>
    </div>
  );
};

export default Error;
