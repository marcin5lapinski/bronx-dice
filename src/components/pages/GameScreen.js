import React from "react";
import GameTable from "../sub-components/GameTable";
import GameSide from "../sub-components/GameSide";

const GameScreen = () => {
    return (
        <div className="container">
            <div className="game-container">
                <GameTable />
                <GameSide />
            </div>
        </div>
    );
}

export default GameScreen;