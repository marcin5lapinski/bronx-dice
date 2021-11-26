import React from "react";
import { useState } from "react";
import app from "../../firebase/firebaseConfig";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const NewPlayer = () => {
    const [name, setName] = useState('');
    const games = 0;
    const won = 0;
    const points = [];
    const id = '';
    const [success, setSuccess] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db, "users"), {
            name,
            games,
            won,
            points,
            id,
        });
        if (docRef) {
            setSuccess(true);
        }
    }

    return (
        <div className="container">
            { success && console.log("Player saved!") }
            <a href="/"><button className="back-btn"></button></a>
            <div className="sub-container">
                <form className="new-player--form" onSubmit={e => submitHandler(e)}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter your name/nickname"
                        className="new-player--input"
                        minLength="2"
                        maxLength="10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className="btn save-player--btn" type="submit">Save</button>
                </form>
             </div>
        </div>
    );
}

export default NewPlayer;