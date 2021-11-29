import React from "react";
import GameTable from "../sub-components/GameTable";
import GameSide from "../sub-components/GameSide";

const GameScreen = ( { playersArray } ) => {

    console.log(playersArray);

    return (
        <div className="container">
            <div className="game-container">
                <GameTable playersArray={playersArray} />
                <GameSide />
            </div>
        </div>
    );
}

export default GameScreen;