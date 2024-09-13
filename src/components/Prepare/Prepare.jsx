import PropTypes from "prop-types";
import { useState } from "react";

const Prepare = ({ prepared }) => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = () => {
    setRecipes((prevRecipes) => [...prevRecipes, prepared]);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table head */}
          <thead>
            <tr>
              <th className="bg-slate-500">Name</th>
              <th className="bg-slate-500">Time</th>
              <th className="bg-slate-500">Calories</th>
              <th className="bg-slate-500">Action</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {recipes.map((recipe, index) => (
              <tr key={index}>
                <td className="text-left bg-red-500">{recipe.recipe_name}</td>
                <td className="text-left bg-red-500">{recipe.preparing_time}</td>
                <td className="text-left bg-red-500">{recipe.calories}</td>
                <td>
                  <button className="rounded-full bg-gray-300 text-[#150B2B] text-[18px] px-6 py-[13px] ">
                    Added
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="mt-4 rounded-full bg-[#0BE58A] text-[#150B2B] text-[18px] px-6 py-[13px]"
        onClick={handleAddRecipe}
      >
        Preparing
      </button>
    </div>
  );
};

Prepare.propTypes = {
  prepared: PropTypes.shape({
    recipe_name: PropTypes.string.isRequired,
    preparing_time: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};

export default Prepare;
