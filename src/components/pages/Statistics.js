import React, { useState, useEffect } from "react";
import app from "../../firebase/firebaseConfig";
import {collection, getDocs, getFirestore, deleteDoc, doc, updateDoc} from "firebase/firestore";
import ChoosePlayer from "../sub-components/ChoosePlayer";
import StatisticsData from "../sub-components/StatisticsData";
import ActionButtons from "../sub-components/ActionButtons";

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
                <ActionButtons playerData={playerData} />
            </div>
         </div>
    );
}

export default Statistics;