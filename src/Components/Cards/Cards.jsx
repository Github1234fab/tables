import React, { useState } from 'react';
import "./Cards.css";
import Calculation from '../Calculation/Calculation';

const Cards = () => {
  const [state, setState] = useState(null);
  const getValue = (e) => {
    setState(e.target.value)
  }
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomArray = array[Math.floor(Math.random() * array.length)];
  console.log(randomArray);
  const totalCalculation = randomArray * state;
  console.log(totalCalculation);

  return (
    <div>
      <div className="buttons">
        <button className='buttons_style' onClick={getValue} value="1">1</button>
        <button className='buttons_style' onClick={getValue} value="2">2</button>
        <button className='buttons_style' onClick={getValue} value="3">3</button>
        <button className='buttons_style' onClick={getValue} value="4">4</button>
        <button className='buttons_style' onClick={getValue} value="5">5</button>
        <button className='buttons_style' onClick={getValue} value="6">6</button>
        <button className='buttons_style' onClick={getValue} value="7">7</button>
        <button className='buttons_style' onClick={getValue} value="8">8</button>
        <button className='buttons_style' onClick={getValue} value="9">9</button>
        <button className='buttons_style' onClick={getValue} value="10">10</button>
      </div>
      <div className="calculation_board">
        <h1 className='table_choose'>{state}</h1>
        <Calculation randomArray={randomArray} state={state} totalCalculation={totalCalculation} />
        <h2 className='blind_calculation'>? X {state} = {totalCalculation}</h2>
      </div>
    </div>
  );
};

export default Cards;







