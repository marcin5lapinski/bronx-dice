import React from "react";
import { useState } from "react";

const NumberOfPlayersSelect = ({ setNumberOfPlayers }) => {
    const [numberSelecValue, setNumberSelectValue] = useState(1);

    setNumberOfPlayers(numberSelecValue);


    return (
        <div className="num-of-pl--select">
            <label htmlFor="num-of-pl" className="player-label">Number of players</label>
            <select name="num-of-pl" id="num-of-pl" className="custom-select num-select" value={numberSelecValue} onChange={e => setNumberSelectValue(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default NumberOfPlayersSelect;