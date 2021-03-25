import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css";

export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <Link to={`/cocktail/${id}`} className="cocktail-link">
      <article className="cocktail">
        <div className="img-container">
          <img src={image} alt={name} className="cocktail-tile-img" />
        </div>
        <div className="cocktail-details">
          <h3 className="cocktail-name">{name}</h3>
          <h4 className="cocktail-glass">{glass}</h4>
          <p className="cocktail-info">{info}</p>
        </div>
      </article>
    </Link>
  );
}
