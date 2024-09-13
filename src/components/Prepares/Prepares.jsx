
import PropTypes from 'prop-types';
import Prepare from '../Prepare/Prepare';



const Prepares = ({recipes}) => {
  
    return (
        <div className="w-1/3 p-4 shadow-2xl rounded-xl">
            <h1 className="text-center text-[#282828] text-[24px] font-semibold border-b-4 pb-3">Want to Cook: {recipes.length}</h1>
            
            {
              recipes.map((prepared, idx) => <Prepare
              key={idx}
              prepared={prepared}
              ></Prepare>)
            }
            
        </div>
    );
};

Prepares.propTypes = {
  recipes: PropTypes.array
};

export default Prepares;