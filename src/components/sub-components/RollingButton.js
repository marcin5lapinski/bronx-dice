import React from "react";

const RollingButton = ( { setDiceState } ) => {
    
    const diceRollAction = () => {
        setDiceState({
            dieOne: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
            dieTwo: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
            dieThree: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
            dieFour: Math.floor(Math.random() * (6 - 1 + 1)) + 1,
            dieFive: Math.floor(Math.random() * (6 - 1 + 1)) + 1
        })
    }
    
    return (
        <div className="rolling-button">
            <button className="roll-btn btn" onClick={diceRollAction}>Roll</button>
            <h2>rolls left: <span>3</span></h2>
        </div>
    )
}

export default RollingButton;