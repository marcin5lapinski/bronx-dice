import React from "react";
import { useState } from "react";
import GameTable from "../sub-components/GameTable";
import GameSide from "../sub-components/GameSide";

const GameScreen = ( { playersArray } ) => {
    const [diceState, setDiceState] = useState({
        dieOne: 0,
        dieTwo: 0,
        dieThree: 0,
        dieFour: 0,
        dieFive: 0
    });
    const diceArray = [diceState.dieOne, diceState.dieTwo, diceState.dieThree, diceState.dieFour, diceState.dieFive];
    
    
    console.log(diceArray);
    //console.log(playersArray);

    return (
        <div className="container">
            <div className="game-container">
                <GameTable playersArray={playersArray} />
                <GameSide setDiceState={setDiceState} diceArray={diceArray}/>
            </div>
        </div>
    );
}

export default GameScreen;