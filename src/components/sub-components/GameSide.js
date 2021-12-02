import React from "react";
import RollingButton from "./RollingButton";
import img from "../../images/bronx-dice_logo.png";

const GameSide = ( {
            setDiceState,
            diceArray,
            clicked,
            setClicked,
            rollCount,
            setRollCount,
            oneScores,
            setOneScores,
            twoScores,
            setTwoScores,
            threeScores,
            setThreeScores,
            fourScores,
            setFourScores,
            fiveScores,
            setFiveScores,
            countPlayers,
            playersArray
        } ) => {

    const IsGameFinished = () => {
        if (countPlayers === 1 && !oneScores.totalSaved) {
            return <img src={img} alt="bronx-dice-logo" width="372" height="66"/>
        } else if (countPlayers === 2 && !oneScores.totalSaved && !twoScores.totalSaved) {
            return <img src={img} alt="bronx-dice-logo" width="372" height="66"/>
        } else if (countPlayers === 3 && !oneScores.totalSaved && !twoScores.totalSaved && !threeScores.totalSaved) {
            return <img src={img} alt="bronx-dice-logo" width="372" height="66"/>
        } else if (countPlayers === 4 && !oneScores.totalSaved && !twoScores.totalSaved && !threeScores.totalSaved && !fourScores.totalSaved) {
            return <img src={img} alt="bronx-dice-logo" width="372" height="66"/>
        } else if (countPlayers === 5 && !oneScores.totalSaved && !twoScores.totalSaved && !threeScores.totalSaved && !fourScores.totalSaved && !fiveScores.totalSaved) {
            return <img src={img} alt="bronx-dice-logo" width="372" height="66"/>
        } else if (countPlayers === 1 && oneScores.totalSaved) {
            return (
                <div className="who-won">
                    <p>The winner is {playersArray[0]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 2 &&  oneScores.totalSaved && twoScores.totalSaved && oneScores.total > twoScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[0]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 2 &&  oneScores.totalSaved && twoScores.totalSaved && oneScores.total < twoScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[1]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 3 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && oneScores.total > twoScores.total && oneScores.total > threeScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[0]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 3 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && oneScores.total < twoScores.total && twoScores.total > threeScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[1]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 3 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && oneScores.total < threeScores.total && twoScores.total < threeScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[2]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 4 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && fourScores.totalSaved && oneScores.total > twoScores.total && oneScores.total > threeScores.total && oneScores.total > fourScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[0]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 4 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && fourScores.totalSaved && oneScores.total < twoScores.total && twoScores.total > threeScores.total && twoScores.total > fourScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[1]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 4 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && fourScores.totalSaved && threeScores.total > oneScores.total && twoScores.total < threeScores.total && threeScores.total > fourScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[2]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 4 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && fourScores.totalSaved && fourScores.total > oneScores.total && twoScores.total < fourScores.total && threeScores.total < fourScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[3]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 5 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && fourScores.totalSaved && fiveScores.totalSaved && oneScores.total > twoScores.total && oneScores.total > threeScores.total && oneScores.total > fourScores.total && oneScores.total > fiveScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[0]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 5 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && fourScores.totalSaved && fiveScores.totalSaved && twoScores.total > oneScores.total && twoScores.total > threeScores.total && twoScores.total > fourScores.total && twoScores.total > fiveScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[1]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 5 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && fourScores.totalSaved && fiveScores.totalSaved && threeScores.total > oneScores.total && threeScores.total > twoScores.total && threeScores.total > fourScores.total && threeScores.total > fiveScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[2]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 5 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && fourScores.totalSaved && fiveScores.totalSaved && fourScores.total > oneScores.total && fourScores.total > twoScores.total && threeScores.total < fourScores.total && fourScores.total > fiveScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[3]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else if (countPlayers === 5 &&  oneScores.totalSaved && twoScores.totalSaved && threeScores.totalSaved && fourScores.totalSaved && fiveScores.totalSaved && fiveScores.total > oneScores.total && fiveScores.total > twoScores.total && fiveScores.total > threeScores.total && fourScores.total < fiveScores.total) {
            return  (
                <div className="who-won">
                    <p>The winner is {playersArray[4]}!</p>
                    <a href="./pre-game"><button className="again-btn btn">Play again</button></a>
                </div>
            )
        } else {
            return <img src={img} alt="bronx-dice-logo" width="372" height="66"/>
        }
    }

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
            <div className="top-logo">
                
                <IsGameFinished />
                
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
            <RollingButton
                setDiceState={setDiceState}
                clicked={clicked}
                diceArray={diceArray}
                rollCount={rollCount}
                setRollCount={setRollCount}
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
            />
        </div>
    );
}

export default GameSide;