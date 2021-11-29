import React from "react";
import app from "../../firebase/firebaseConfig";
import { getFirestore, deleteDoc, doc, updateDoc } from "firebase/firestore";


const ActionButtons = ( { playerData } ) => {

    const deleteHandler = async () => {
        const db = getFirestore(app);
        await deleteDoc(doc(db, "users", playerData.id));
        window.location.reload(false);
    }

    const resetHandler = async () => {
        const db = getFirestore(app);
        const playerRef = doc(db, "users", playerData.id);
        await updateDoc(playerRef, {
            games: 0,
            won: 0,
            points: [],
        });
        window.location.reload(false);
    }

    return (
        <div className="action-btns">
            <button className="btn reset-btn" onClick={resetHandler}>Reset stats</button>
            <button className="btn delete-btn" onClick={deleteHandler}>Delete player</button>
        </div>
    )
}

export default ActionButtons;