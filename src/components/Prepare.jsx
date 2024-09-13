import PropTypes from "prop-types";

const Prepare = ({ preparedRecipes }) => {
  return (
    <div className="w-full p-4">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="text-left bg-slate-500 p-2">Name</th>
              <th className="text-left bg-slate-500 p-2">Time</th>
              <th className="text-left bg-slate-500 p-2">Calories</th>
              <th className="text-left bg-slate-500 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipes.map((recipe) => (
              <tr key={recipe.recipe_id}>
                <td className="text-left bg-red-200 p-2">{recipe.recipe_name}</td>
                <td className="text-left bg-red-200 p-2">{recipe.preparing_time}</td>
                <td className="text-left bg-red-200 p-2">{recipe.calories}</td>
                <td className="p-2">
                  <button className="rounded-full bg-[#0BE58A] text-[#150B2B] text-[16px] px-4 py-2">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Prepare.propTypes = {
  preparedRecipes: PropTypes.arrayOf(
    PropTypes.shape({
      recipe_image: PropTypes.string.isRequired,
      recipe_id: PropTypes.string.isRequired,
      recipe_name: PropTypes.string.isRequired,
      short_description: PropTypes.string.isRequired,
      preparing_time: PropTypes.string.isRequired,
      calories: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Prepare;
