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

const PlayersSelect = ( { players, numberOfPlayers } ) => {
    const [selectValue, setSelectValue] = useState('Zordon');
    const numbers = [1];

    for (let i = 2; i <= numberOfPlayers; i++) {
        numbers.push(i);
    }

    return (
        <div className="players-for-game">
            
                {
                    numbers.map((el) => {
                        return (
                            <div className="choose-player--pregame" key={el}>
		                        <label htmlFor={"player" + el} className="player-label">Player {el}.</label>
                                <select name={"player" + el} id={"player" + el} className="custom-select" value={selectValue} onChange={e => setSelectValue(e.target.value)}>

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
                    })
                }

        </div>
    )
}

const StartButton = () => {
    return (
        <div className="start--btn--box">
            <a href="/game-screen"><button className="btn start-btn">Start</button></a>
        </div>
    )
}

const PreGame = () => {
    const [users, setUsers] = useState([]);
    const [numberOfPlayers, setNumberOfPlayers] = useState(1);

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
                    <PlayersSelect players={users} numberOfPlayers={numberOfPlayers} />
                    <StartButton />
                </form>
            </div>
        </div>
    );
}

export default PreGame;