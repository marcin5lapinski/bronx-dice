import React from "react";

const StatisticsData = ( { playerData } ) => {

    const maxPoints = Math.max(...playerData.points);
    const avgPoints = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

    const setMaxPoints = (value) => {
        if (value === -Infinity) {
            return 0;
        } else {
            return value;
        }
    }

    return (
        <div className="statistics">
            <h2 className="stat">Games played: <span>{playerData.games}</span></h2>
            <h2 className="stat">Games won: <span>{playerData.won}</span></h2>
            <h2 className="stat">Max points: <span>{setMaxPoints(maxPoints)}</span></h2>
            <h2 className="stat">
                Avg points: <span>{isNaN(avgPoints(playerData.points)) ? '0' : +avgPoints(playerData.points).toFixed(1)}</span>
            </h2>
        </div>
    )
}

export default StatisticsData;