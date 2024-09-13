// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import Prepare from "./components/Prepare";

const App = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [preparedRecipes, setPreparedRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from JSON file in public folder
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipesData(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  const handleAddRecipe = (recipe) => {
    setPreparedRecipes((prev) => {
      const exists = prev.some((r) => r.recipe_id === recipe.recipe_id);
      if (!exists) return [...prev, recipe];
      return prev;
    });
  };

  return (
    <div className="App">
      <RecipeList recipes={recipesData} onAddRecipe={handleAddRecipe} />
      <Prepare preparedRecipes={preparedRecipes} />
    </div>
  );
};

export default App;
