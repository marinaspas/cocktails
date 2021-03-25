import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <div className="no-match">
        <img
          src="../images/cocktail-icon.png"
          alt="cocktail-icon"
          className="empty-state-icon"
        />
        <h2 className="section-title">
          no cocktails matched your search criteria
        </h2>
      </div>
    );
  }
  return (
    <section className="section cocktails-tiles">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-wrapper">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
