import React from 'react';

const Calculation = ({ state, randomArray, totalCalculation }) => {
    return (
        <div>
            <h2>{state} X {randomArray} = {totalCalculation}</h2>
        </div>
    );
};

export default Calculation;