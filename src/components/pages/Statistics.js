import React, { useState, useEffect } from "react";
import app from "../../firebase/firebaseConfig";
import {collection, getDocs, getFirestore, writeBatch, setDoc} from "firebase/firestore";



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
    console.log(playerData);

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
            <h2 className="stat">Avg points: <span>{isNaN(avgPoints(playerData.points)) ? '0' : +avgPoints(playerData.points).toFixed(1)}</span></h2>
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
    const [users, setUsers] = useState([]);
    const [playerData, setPlayerData] = useState({
        name: "Zordon",
        games: 2,
        won: 0,
        points: [99, 152],
        id: '6XOhIkMtcasdiIfWSCV5',
    });

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
                <ChoosePlayer players={users} playerData={playerData} setPlayerData={setPlayerData} />
                <StatisticsData playerData={playerData} />
                <ActionButtons />
            </div>
         </div>
    );
}

export default Statistics;