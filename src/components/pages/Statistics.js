import React from "react";

const ChoosePlayer = () => {
    return (
        <div className="choose-player">
            <label htmlFor="players" className="player-label">Player stats</label>
                <select name="players" id="players" value="" className="custom-select">
                    <option value="name1">Name1</option>
                    <option value="name2">Name2</option>
                    <option value="name3">Name3</option>
                    <option value="name4">Name4</option>
                </select>
        </div>
    )
}

const StatisticsData = () => {
    return (
        <div className="statistics">
            <h2 className="stat">Games played: <span className="games-played">11</span></h2>
            <h2 className="stat">Games won: <span className="games-won">3</span></h2>
            <h2 className="stat">Max points: <span className="max-pts">243</span></h2>
            <h2 className="stat">Avg points: <span className="avg-pts">198.7</span></h2>
         </div>
    )
}

const ActionButtons = () => {
    return (
        <div className="action-btns">
            <button className="btn reset-btn">Reset stats</button>
            <button className="btn delete-btn">Delete player</button>
        </div>
    )
}

const Statistics = () => {
    return (
        <div className="container">
            <a href="/"><button className="back-btn"></button></a>
            <div className="inner-container">
                <ChoosePlayer />
                <StatisticsData />
                <ActionButtons />
            </div>
         </div>
    );
}

export default Statistics;