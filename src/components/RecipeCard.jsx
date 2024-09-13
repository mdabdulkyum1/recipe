import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

const RecipeCard = ({ recipe, onAddRecipe }) => {
  const { recipe_image, recipe_name, short_description, preparing_time, calories } = recipe;

  return (
    <div className="w-full p-4 shadow-lg rounded-lg border">
      <img src={recipe_image} alt={recipe_name} className="w-full h-32 object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-2">{recipe_name}</h2>
      <p className="text-gray-600 mt-1">{short_description}</p>
      <div className="flex justify-between mt-2">
        <div className="flex items-center text-gray-600">
          <IoTimeOutline className="mr-1" /> {preparing_time}
        </div>
        <div className="flex items-center text-gray-600">
          <FaFire className="mr-1" /> {calories}
        </div>
      </div>
      <button
        onClick={() => onAddRecipe(recipe)}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg"
      >
        Want to Cook
      </button>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    recipe_image: PropTypes.string.isRequired,
    recipe_id: PropTypes.string.isRequired,
    recipe_name: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    preparing_time: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
  }).isRequired,
  onAddRecipe: PropTypes.func.isRequired,
};

export default RecipeCard;
