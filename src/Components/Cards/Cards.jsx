import React from 'react';
import "./Cards.css";

const Cards = () => {

  // Chiffre aléatoire......................................................................
  let arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let randomNumber = arrayNumber[Math.floor(Math.random() * arrayNumber.length)];
  console.log(randomNumber);

  // Sélectionner un bouton pour obtenir une table et création de calcul......................................................................
  let buttonsValues;
  function cal(e) {
 buttonsValues = e.target.value;
    console.log(buttonsValues);
   let totalCalculation = randomNumber * buttonsValues;
    console.log(totalCalculation);
    // let randomCalculation = `? x ${buttonsValues} = ${totalCalculation}`;
  }

// //Test entre la réponse et randomNumber..................................
// FirstPracticeResponseSend.addEventListener("click", () => {
//   if (randomNumber == ResponseFirstPractice.value) {
//     responseFirstPractice.innerHTML = "Yeah!! Tu gagnes!";
//   } else {
//     responseFirstPractice.innerHTML = "Uuuurps! T'es vraiment sûr, là?!!!!!!";
//   } 
return (
  <div className='cardContainer'>
    <div className="buttons_values" onClick={cal}>
      <button class="button_value" value="1" >1</button>
      <button class="button_value" value="2">2</button>
      <button class="button_value" value="4">4</button>
      <button class="button_value" value="3">3</button>
      <button class="button_value" value="5">5</button>
      <button class="button_value" value="6">6</button>
      <button class="button_value" value="7">7</button>
      <button class="button_value" value="8">8</button>
      <button class="button_value" value="9">9</button>
      <button class="button_value" value="10">10</button>
    </div>
    <span className="randomCalculation_post">{buttonsValues}</span>
    {/* <div className="calculation">{totalCalculation}</div>
    <div className="SendResponse"> {randomCalculation}</div>  */}
    </div>
);
};

export default Cards;