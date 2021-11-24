import React from "react";

const GameSide = () => {
    return (
        <div class="dice-side">
            <div class="saved-dice">
                <div class="saved-single-dice"></div>
                <div class="saved-single-dice"></div>
                <div class="saved-single-dice"></div>
                <div class="saved-single-dice"></div>
            </div>
            <div class="roll-dice-box">
                <div class="rollers">
                    <div class="one-dice-box">dice</div>
                    <div class="one-dice-box">dice</div>
                    <div class="one-dice-box">dice</div>
                </div>
                <div class="rollers">
                    <div class="one-dice-box">dice</div>
                    <div class="one-dice-box">dice</div>
                </div>
            </div>
            <div class="rolling-button">
                <button class="roll-btn btn">Roll</button>
                <h2>rolls left: <span>3</span></h2>
            </div>
        </div>
    );
}

export default GameSide;