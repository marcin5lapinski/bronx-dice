import React from "react";
import { useState } from "react";

const ChoosePlayer = ( { players, playerData, setPlayerData } ) => {
    const [selectValue, setSelectValue] = useState(playerData.name);

    const getPlayerData = (playerName) => {
        players.map((el) => {
            if (el.name === playerName) {
                return setPlayerData(el);
            }
        })
    }

    getPlayerData(selectValue);
    //console.log(playerData);

    return (
        <div className="choose-player">
            <label htmlFor="players" className="player-label">Player stats</label>
                <select name="players" id="players" className="custom-select" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                    {
                        players.map((el) => {
                            return (
                                <option key={el.id} value={el.name}>{el.name}</option>
                            );
                        })
                    }
                </select>
        </div>
    )
}

export default ChoosePlayer;