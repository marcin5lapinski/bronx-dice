import React from "react";

const NumberOfPlayersSelect = () => {
    return (
        <div className="num-of-pl--select">
            <label htmlFor="num-of-pl" className="player-label">Number of players</label>
            <select name="num-of-pl" id="num-of-pl" className="custom-select num-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

const PlayersSelect = () => {
    return (
        <div class="players-for-game">
            <div class="choose-player--pregame">
                <label for="player-one" className="player-label">Player 1.</label>
                <select name="player-one" id="player-one" className="custom-select">
                    <option value="name1">Name1</option>
                    <option value="name2">Name2</option>
                    <option value="name3">Name3</option>
                    <option value="name4">Name4</option>
                    <option value="name5">Name5</option>
                </select>
            </div>
            <div class="choose-player--pregame">
                <label for="player-two" className="player-label">Player 2.</label>
                <select name="player-two" id="player-two" className="custom-select">
                    <option value="name1">Name1</option>
                    <option value="name2">Name2</option>
                    <option value="name3">Name3</option>
                    <option value="name4">Name4</option>
                    <option value="name5">Name5</option>
                </select>
            </div>
            <div class="choose-player--pregame">
                <label for="player-three" className="player-label">Player 3.</label>
                <select name="player-three" id="player-three" className="custom-select">
                    <option value="name1">Name1</option>
                    <option value="name2">Name2</option>
                    <option value="name3">Name3</option>
                    <option value="name4">Name4</option>
                    <option value="name5">Name5</option>
                </select>
            </div>
            <div class="choose-player--pregame">
                <label for="player-four" className="player-label">Player 4.</label>
                <select name="player-four" id="player-four" className="custom-select">
                    <option value="name1">Name1</option>
                    <option value="name2">Name2</option>
                    <option value="name3">Name3</option>
                    <option value="name4">Name4</option>
                    <option value="name5">Name5</option>
                </select>
            </div>
            <div class="choose-player--pregame">
                <label for="player-five" className="player-label">Player 5.</label>
                <select name="player-five" id="player-five" className="custom-select">
                    <option value="name1">Name1</option>
                    <option value="name2">Name2</option>
                    <option value="name3">Name3</option>
                    <option value="name4">Name4</option>
                    <option value="name5">Name5</option>
                </select>
            </div>
        </div>
    )
}

const StartButton = () => {
    return (
        <div class="start--btn--box">
            <a href="/game-screen"><button class="btn start-btn">Start</button></a>
        </div>
    )
}

const PreGame = () => {
    return (
        <div className="container">
            <a href="/"><button className="back-btn"></button></a>
            <div className="inner-container">
                <form className="pre-game--form">
                    <NumberOfPlayersSelect />
                    <PlayersSelect />
                    <StartButton />
                </form>
            </div>
        </div>
    );
}

export default PreGame;