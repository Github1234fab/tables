import React from 'react';
import GamesData from "../../data/Games.json"

const Games = () => {
    const mapping = GamesData.map(({ id, title, description, compteur, clique, reponse }) => {
        
    }
     
 )) ;
    return (
        <section className='games_container'>
            <div className="Games_section">
                <div className="Games_cards">

                </div>
            </div>
        </section>
    );
};

export default Games;