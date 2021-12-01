import React from "react";
import { useState } from "react";
import GameTable from "../sub-components/GameTable";
import GameSide from "../sub-components/GameSide";
import { playerOneScores } from "../sub-components/players-scores/player1scores";
import { playerTwoScores } from "../sub-components/players-scores/player2scores";
import { playerThreeScores } from "../sub-components/players-scores/player3scores";
import { playerFourScores } from "../sub-components/players-scores/player4scores";
import { playerFiveScores } from "../sub-components/players-scores/player5scores";

const GameScreen = ( { playersArray } ) => {
    const [diceState, setDiceState] = useState({
        dieOne: 0,
        dieTwo: 0,
        dieThree: 0,
        dieFour: 0,
        dieFive: 0
    });
    const [clicked, setClicked] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    })
    const [rollCount, setRollCount] = useState(3);
    const diceArray = [diceState.dieOne, diceState.dieTwo, diceState.dieThree, diceState.dieFour, diceState.dieFive];
    const [oneScores, setOneScores] = useState(playerOneScores);
    const [twoScores, setTwoScores] = useState(playerTwoScores);
    const [threeScores, setThreeScores] = useState(playerThreeScores);
    const [fourScores, setFourScores] = useState(playerFourScores);
    const [fiveScores, setFiveScores] = useState(playerFiveScores);
    const [queue, setQueue] = useState(1);
    const countPlayers = playersArray.length;

    console.log(diceArray);
    //console.log(playersArray);

    return (
        <div className="container">
            <div className="game-container">
                <GameTable 
                    playersArray={playersArray}
                    diceArray={diceArray}
                    oneScores={oneScores}
                    setOneScores={setOneScores}
                    twoScores={twoScores}
                    setTwoScores={setTwoScores}
                    threeScores={threeScores}
                    setThreeScores={setThreeScores}
                    fourScores={fourScores}
                    setFourScores={setFourScores}
                    fiveScores={fiveScores}
                    setFiveScores={setFiveScores}
                    countPlayers={countPlayers}
                    setRollCount={setRollCount}
                    setDiceState={setDiceState}
                    setClicked={setClicked}
                    queue={queue}
                    setQueue={setQueue}
                />
                <GameSide 
                    setDiceState={setDiceState}
                    diceArray={diceArray}
                    clicked={clicked}
                    setClicked={setClicked}
                    rollCount={rollCount}
                    setRollCount={setRollCount}
                />
            </div>
        </div>
    );
}

export default GameScreen;