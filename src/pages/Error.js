import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1 className="error-title">Oops! It's a dead end... </h1>
        <div className="center">
          <Link to="/" exact="true" className="btn-primary">
            Go back home
          </Link>
        </div>
        <div className="glass-wrap">
          <img src="../images/empty-glass.jpg" alt="an empty glass" />
        </div>
      </div>
    </section>
  );
};

export default Error;
