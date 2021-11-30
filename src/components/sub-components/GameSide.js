import React from "react";
import RollingButton from "./RollingButton";

const GameSide = ( { setDiceState, diceArray, clicked, setClicked } ) => {

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

    const saveDice = (num) => {
        if (num === 1 && !clicked.one) {
            setClicked({
                ...clicked,
                one: true
            })
        } else if (num === 1 && clicked.one) {
            setClicked({
                ...clicked,
                one: false,
            })
        } else if (num === 2 && !clicked.two) {
            setClicked({
                ...clicked,
                two: true,
            })
        } else if (num === 2 && clicked.two) {
            setClicked({
                ...clicked,
                two: false,
            })
        } else if (num === 3 && !clicked.three) {
            setClicked({
                ...clicked,
                three: true,
            })
        } else if (num === 3 && clicked.three) {
            setClicked({
                ...clicked,
                three: false,
            })
        } else if (num === 4 && !clicked.four) {
            setClicked({
                ...clicked,
                four: true,
            })
        } else if (num === 4 && clicked.four) {
            setClicked({
                ...clicked,
                four: false,
            })
        } else if (num === 5 && !clicked.five) {
            setClicked({
                ...clicked,
                five: true,
            })
        } else if (num === 5 && clicked.five) {
            setClicked({
                ...clicked,
                five: false,
            })
        }
    }

    const oneStyles = {
        border: (!clicked.one) ? "5px solid transparent" : "5px solid red",
        borderRadius: "5px",
        background: (!clicked.one) ? "transparent" : "red",
        boxSizing: "content-box"
    }

    const twoStyles = {
        border: (!clicked.two) ? "5px solid transparent" : "5px solid red",
        borderRadius: "5px",
        background: (!clicked.two) ? "transparent" : "red",
        boxSizing: "content-box"
    }

    const threeStyles = {
        border: (!clicked.three) ? "5px solid transparent" : "5px solid red",
        borderRadius: "5px",
        background: (!clicked.three) ? "transparent" : "red",
        boxSizing: "content-box"
    }

    const fourStyles = {
        border: (!clicked.four) ? "5px solid transparent" : "5px solid red",
        borderRadius: "5px",
        background: (!clicked.four) ? "transparent" : "red",
        boxSizing: "content-box"
    }

    const fiveStyles = {
        border: (!clicked.five) ? "5px solid transparent" : "5px solid red",
        borderRadius: "5px",
        background: (!clicked.five) ? "transparent" : "red",
        boxSizing: "content-box"
    }

    console.log(clicked);

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
                    <div className="one-dice-box" onClick={() => saveDice(1)} style={oneStyles}>{drawDice(diceArray[0])}</div>
                    <div className="one-dice-box" onClick={() => saveDice(2)} style={twoStyles}>{drawDice(diceArray[1])}</div>
                    <div className="one-dice-box" onClick={() => saveDice(3)} style={threeStyles}>{drawDice(diceArray[2])}</div>
                </div>
                <div className="rollers">
                    <div className="one-dice-box" onClick={() => saveDice(4)} style={fourStyles}>{drawDice(diceArray[3])}</div>
                    <div className="one-dice-box" onClick={() => saveDice(5)} style={fiveStyles}>{drawDice(diceArray[4])}</div>
                </div>
            </div>
            <RollingButton setDiceState={setDiceState} clicked={clicked} diceArray={diceArray} />
        </div>
    );
}

export default GameSide;