import React from "react";

const PlayersSelect = ( {
    players,
    numberOfPlayers,
    setPlayerOne, playerOne,
    setPlayerTwo, playerTwo,
    setPlayerThree, playerThree,
    setPlayerFour, playerFour,
    setPlayerFive, playerFive
    } ) => {


        return (
        <div className="players-for-game">

            <div className="choose-player--pregame">
                <label htmlFor="player-one" className="player-label">Player 1.</label>
                <select name="player-one" id="player-one" className="custom-select" value={playerOne} onChange={e => setPlayerOne(e.target.value)}>

                {   
                    players.map((el) => {
                        return (
                            <option key={el.id} value={el.name}>{el.name}</option>
                        );
                    })
                }

                </select>
            </div>
            <div className="choose-player--pregame" style={{display: numberOfPlayers < 2 ? "none" : "flex"}}>
                <label htmlFor="player-two" className="player-label">Player 2.</label>
                <select name="player-two" id="player-two" className="custom-select" value={playerTwo} onChange={e => setPlayerTwo(e.target.value)}>

                {   
                    players.map((el) => {
                        return (
                            <option key={el.id} value={el.name}>{el.name}</option>
                        );
                    })
                }

                </select>
            </div>
            <div className="choose-player--pregame" style={{display: numberOfPlayers < 3 ? "none" : "flex"}}>
                <label htmlFor="player-three" className="player-label">Player 3.</label>
                <select name="player-three" id="player-three" className="custom-select" value={playerThree} onChange={e => setPlayerThree(e.target.value)}>

                {   
                    players.map((el) => {
                        return (
                            <option key={el.id} value={el.name}>{el.name}</option>
                        );
                    })
                }

                </select>
            </div>
            <div className="choose-player--pregame" style={{display: numberOfPlayers < 4 ? "none" : "flex"}}>
                <label htmlFor="player-four" className="player-label">Player 4.</label>
                <select name="player-four" id="player-four" className="custom-select" value={playerFour} onChange={e => setPlayerFour(e.target.value)}>

                {   
                    players.map((el) => {
                        return (
                            <option key={el.id} value={el.name}>{el.name}</option>
                        );
                    })
                }

                </select>
            </div>
            <div className="choose-player--pregame" style={{display: numberOfPlayers < 5 ? "none" : "flex"}}>
                <label htmlFor="player-five" className="player-label">Player 5.</label>
                <select name="player-five" id="player-five" className="custom-select" value={playerFive} onChange={e => setPlayerFive(e.target.value)}>

                {   
                    players.map((el) => {
                        return (
                            <option key={el.id} value={el.name}>{el.name}</option>
                        );
                    })
                }

                </select>
            </div>
            
        </div>
)
}

export default PlayersSelect;