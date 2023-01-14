import React from 'react';
import GamesData from "../../data/Games.json";
import Collapse from "../../Components/Collapses/Collapse";

const Games = () => {
    return (
        <section className='games_container'>
            <div className="Games_section">
                <div className="Games_cards">
                    {GamesData.map(({ id, title, description}) => (
                        <Collapse className='collapse' key={id} title={title}  description={description} />
                    ))};
                </div>
            </div>
        </section>
    );
};

export default Games;