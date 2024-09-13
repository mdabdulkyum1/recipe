
import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Cook from "../Cook/Cook";

const Cooks = ({handleAddReCipe}) => {
    let [cooks, setCooks] = useState([])
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=> res.json())
        .then(data => setCooks(data))
    }, [])
    return (
        <div className="w-2/3">
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px'
        }}>
        {
            cooks.map((cook, idx) => <Cook
            key={idx}
            cook={cook}
            handleAddReCipe={handleAddReCipe}
            ></Cook>)
        }
        </div>
        </div>
    );
};

Cooks.propTypes = {
    handleAddReCipe: PropTypes.func
};

export default Cooks;