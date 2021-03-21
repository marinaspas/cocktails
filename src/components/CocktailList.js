import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <div>
      <p>this is cocktail list</p>
    </div>
  );
};
export default CocktailList;
