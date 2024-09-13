import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
const Cook = ({ cook, handleAddRecipe }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = cook;

  return (
    <div className="w-[379px] p-6 shadow-2xl rounded-xl space-y-4">
      <img src={recipe_image} alt={recipe_name} />
      <h1 className="text-[#282828] font-semibold text-[20px]">
        {recipe_name}
      </h1>
      <p className="text-[16px] text-[#878787]">{short_description}</p>
      <div className="gap-5 pb-2 space-y-4 border-y-2">
        <h1 className="text-[#282828] text-[18px] font-medium mt-2">
          Ingredients: {ingredients.length}
        </h1>
        <ul>
          {ingredients.map((ingredient, idx) => (
            <li
              className="pl-4 list-disc list-inside text-[#878787] text-[18px]"
              key={idx}
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-2 place-items-center text-[#282828CC] text-[16px]">
          <IoTimeOutline />
          <p>{preparing_time}</p>
        </div>
        <div className="flex gap-2 place-items-center text-[#282828CC] text-[16px]">
          <FaFire />
          <p>{calories} calories</p>
        </div>
      </div>

      {/* Use Want to Cook button to add recipe */}
      <button
        onClick={() =>
          handleAddRecipe({
            recipe_name: recipe_name,
            preparing_time: preparing_time,
            calories: calories,
          })
        }
        className="rounded-full bg-[#0BE58A] text-[#150B2B] text-[18px] px-6 py-[13px]"
      >
        Want to Cook
      </button>
    </div>
  );
};

Cook.propTypes = {
  cook: PropTypes.object.isRequired,
  handleAddRecipe: PropTypes.func.isRequired,
};

export default Cook;
