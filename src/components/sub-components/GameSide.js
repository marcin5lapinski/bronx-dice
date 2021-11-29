import React from "react";
import RollingButton from "./RollingButton";

const GameSide = ( { setDiceState, diceArray } ) => {

    const drawDice = (value) => {
        if (value === 1) {
            return <div className="die1"></div>
        } else if (value === 2) {
            return <div className="die2"></div>
        } else if (value === 3) {
            return <div className="die3"></div>
        } else if (value === 4) {
            return <div className="die4"></div>
        } else if (value === 5) {
            return <div className="die5"></div>
        } else if (value === 6) {
            return <div className="die6"></div>
        } else {
            return <div></div>
        }
    }

    return (
        <div className="dice-side">
            <div className="saved-dice">
                <div className="saved-single-dice"></div>
                <div className="saved-single-dice"></div>
                <div className="saved-single-dice"></div>
                <div className="saved-single-dice"></div>
                <div className="saved-single-dice"></div>
            </div>
            <div className="roll-dice-box">
                <div className="rollers">
                    <div className="one-dice-box">{drawDice(diceArray[0])}</div>
                    <div className="one-dice-box">{drawDice(diceArray[1])}</div>
                    <div className="one-dice-box">{drawDice(diceArray[2])}</div>
                </div>
                <div className="rollers">
                    <div className="one-dice-box">{drawDice(diceArray[3])}</div>
                    <div className="one-dice-box">{drawDice(diceArray[4])}</div>
                </div>
            </div>
            <RollingButton setDiceState={setDiceState} />
        </div>
    );
}

export default GameSide;