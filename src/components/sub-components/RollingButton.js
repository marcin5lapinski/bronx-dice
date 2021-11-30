import React from "react";

const RollingButton = ( { setDiceState, clicked, diceArray } ) => {
    
    const diceRollAction = () => {
        setDiceState({
            dieOne: (!clicked.one) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[0],
            dieTwo: (!clicked.two) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[1],
            dieThree: (!clicked.three) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[2],
            dieFour: (!clicked.four) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[3],
            dieFive: (!clicked.five) ? Math.floor(Math.random() * (6 - 1 + 1)) + 1 : diceArray[4],
        })
    }
    
    return (
        <div className="rolling-button">
            <button className="roll-btn btn" onClick={diceRollAction}>Roll</button>
            <h2 className="rolls-left">rolls left: <span>3</span></h2>
        </div>
    )
}

export default RollingButton;