import React from "react";
import { IRecipe } from "../IRecipe";

interface Props {
  recipe: IRecipe;
}
const recipe: React.FC<Props> = (props) => {
  const { recipe } = props;
  return (
    <div className="recipe">
      <div className="title">
        <img
          src={recipe.thumbnail || "http://localhost:3000/placeholder.jpg"}
          alt={recipe.title}
        />
        <p>{recipe.title}</p>
      </div>
      {recipe.ingredients && (
        <ul>
          {recipe.ingredients.split(",").map((ingredient) => (
            <li key={ingredient + Math.random()}>{ingredient}</li>
          ))}
        </ul>
      )}
      <a href={recipe.href} target="_bla">
        View Recipe
      </a>
    </div>
  );
};

export default recipe;
