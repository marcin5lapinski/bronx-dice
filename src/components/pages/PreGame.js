import React, { useState, useEffect } from "react";
import app from "../../firebase/firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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

const StartButton = ({ playerOne, playerTwo, playerThree, playerFour, playerFive, numberOfPlayers }) => {
    const playersArray = [playerOne, playerTwo, playerThree, playerFour, playerFive];
    playersArray.length = numberOfPlayers;

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
            { playerRepeats(playersArray) ? <a href="/game-screen"><button className="btn start-btn">Start</button></a> : <p className="warning">Choose different players!</p>}
        </div>
    )
}

const PreGame = () => {
    const [users, setUsers] = useState([]);
    const [numberOfPlayers, setNumberOfPlayers] = useState(1);
    const [playerOne, setPlayerOne] = useState('Player');
    const [playerTwo, setPlayerTwo] = useState('Player');
    const [playerThree, setPlayerThree] = useState('Player');
    const [playerFour, setPlayerFour] = useState('Player');
    const [playerFive, setPlayerFive] = useState('Player');

    const getUsers = async () => {
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "users"));
        const arr = [];
        querySnapshot.forEach((doc) => {
            arr.push(doc.data());
            //console.log(doc.data());
        });
        setUsers(arr);
    }
  
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            <a href="/"><button className="back-btn"></button></a>
            <div className="inner-container">
                <form className="pre-game--form">
                    <NumberOfPlayersSelect setNumberOfPlayers={setNumberOfPlayers} />
                    <PlayersSelect 
                        players={users}
                        numberOfPlayers={numberOfPlayers}
                        setPlayerOne={setPlayerOne} playerOne={playerOne}
                        setPlayerTwo={setPlayerTwo} playerTwo={playerTwo}
                        setPlayerThree={setPlayerThree} playerThree={playerThree}
                        setPlayerFour={setPlayerFour} playerFour={playerFour}
                        setPlayerFive={setPlayerFive} playerFive={playerFive}
                    />
                    <StartButton 
                        playerOne={playerOne}
                        playerTwo={playerTwo}
                        playerThree={playerThree}
                        playerFour={playerFour}
                        playerFive={playerFive}
                        numberOfPlayers={numberOfPlayers}
                    />
                </form>
            </div>
        </div>
    );
}

export default PreGame;