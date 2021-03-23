import React from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const getIngredients = (ingredients, measures) => {
  return (
    <ul>
      {ingredients.map((ingredient) => {
        console.log(ingredient, "this is an ingredient");
        return (
          <li key={ingredient.ingredient}>
            {ingredient.measure ? `${ingredient.measure} of ` : ""}
            {ingredient.ingredient}
          </li>
        );
      })}
    </ul>
  );
};

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
          } = data.drinks[0];

          const ingredients = Object.entries(data.drinks[0])
            .filter((datum) => {
              return datum[1] && datum[0].includes("Ingredient");
            })
            .map((datum) => {
              const measure =
                data.drinks[0][datum[0].replace("Ingredient", "Measure")];
              return {
                ingredient: datum[1],
                measure,
              };
            });

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} className="drink-img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span> {name}
          </p>
          <p>
            <span className="drink-data">category: </span> {category}
          </p>
          <p>
            <span className="drink-data">info: </span> {info}
          </p>
          <p>
            <span className="drink-data">glass: </span> {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span> {instructions}
          </p>
          <div>
            <span className="drink-data">
              ingredients: {getIngredients(ingredients)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
