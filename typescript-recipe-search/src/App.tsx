import React, { FormEvent, useEffect, useState } from "react";

import "./App.css";
import Recipe from "./components/Recipe";
import { IRecipe } from "./IRecipe";

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [recipeSearch, setRecipeSearch] = useState("");

  const searchForRecipes = async (query: string): Promise<IRecipe[]> => {
    const result = await fetch(`http://localhost:3001/?search=${query}`);
    return (await result.json()).results;
  };

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector("#searchText") as HTMLFormElement;
    setRecipeSearch(input.value);
    input.value = "";
  };
  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recipeSearch);
      if (query) {
        const response = await searchForRecipes(query);
        setRecipes(response);
      }
    })();
  }, [recipeSearch]);
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>
        SEARCH FOR ANY RECIPE YOU WANT TO KNOW
      </h2>
      <form className="searchForm" onSubmit={(event) => search(event)}>
        <input id="searchText" type="text" />
        <button>Search</button>
      </form>
      {recipeSearch && <p>Results for {recipeSearch}...</p>}
      <div className="recipes-container">
        {recipes &&
          recipes.map((recipe) => <Recipe key={recipe.href} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default App;
