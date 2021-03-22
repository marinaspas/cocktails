import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
      <article className="cocktail">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="cocktail-details">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          details
        </div>
      </article>
    </Link>
  );
}
