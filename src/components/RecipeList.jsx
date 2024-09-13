import PropTypes from "prop-types";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onAddRecipe }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.recipe_id} recipe={recipe} onAddRecipe={onAddRecipe} />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      recipe_image: PropTypes.string.isRequired,
      recipe_id: PropTypes.string.isRequired,
      recipe_name: PropTypes.string.isRequired,
      short_description: PropTypes.string.isRequired,
      preparing_time: PropTypes.string.isRequired,
      calories: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddRecipe: PropTypes.func.isRequired,
};

export default RecipeList;
