import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const StartButton = ({ playersArray, numberOfPlayers }) => {
    playersArray.length = numberOfPlayers;
    console.log(playersArray);
    useParams();

    const playerRepeats = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            return false;
          }
        }
        return true;
      }

    return (
        <div className="start--btn--box">
            { playerRepeats(playersArray) ? <Link to="/game-screen" params={ playersArray }><button className="btn start-btn">Start</button></Link> : <p className="warning">Choose different players!</p>}
        </div>
    )
}

export default StartButton;