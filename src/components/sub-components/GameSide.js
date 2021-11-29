import React from "react";

const GameSide = () => {
    return (
        <div className="dice-side">
            <div className="saved-dice">
                <div className="saved-single-dice"></div>
                <div className="saved-single-dice"></div>
                <div className="saved-single-dice"></div>
                <div className="saved-single-dice"></div>
            </div>
            <div className="roll-dice-box">
                <div className="rollers">
                    <div className="one-dice-box">dice</div>
                    <div className="one-dice-box">dice</div>
                    <div className="one-dice-box">dice</div>
                </div>
                <div className="rollers">
                    <div className="one-dice-box">dice</div>
                    <div className="one-dice-box">dice</div>
                </div>
            </div>
            <div className="rolling-button">
                <button className="roll-btn btn">Roll</button>
                <h2>rolls left: <span>3</span></h2>
            </div>
        </div>
    );
}

export default GameSide;