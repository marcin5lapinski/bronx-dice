import React, { useState, useEffect } from "react";
import app from "../../firebase/firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import NumberOfPlayersSelect from "../sub-components/NumberOfPlayersSelect";
import PlayersSelect from "../sub-components/PlayersSelect";
import StartButton from "../sub-components/StartButton";

const PreGame = ({ playersArray,
                playerOne,
                playerTwo,
                playerThree,
                playerFour,
                playerFive,
                setPlayerOne,
                setPlayerTwo,
                setPlayerThree,
                setPlayerFour,
                setPlayerFive,
                numberOfPlayers,
                setNumberOfPlayers }) => {
    const [users, setUsers] = useState([]);

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

    const startAction = (e) => {
        e.preventDefault();
        window.location.href="/game-screen";
    }
  
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            <a href="/"><button className="back-btn"></button></a>
            <div className="inner-container">               
                <form className="pre-game--form" onSubmit={e => startAction(e)}>
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
                        playersArray={playersArray}
                    />
                </form>
            </div>
        </div>
    );

}

export default PreGame;