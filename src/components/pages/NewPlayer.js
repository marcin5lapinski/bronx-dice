import React from "react";
import { useState } from "react";
import app from "../../firebase/firebaseConfig";
import { addDoc, collection, getFirestore, updateDoc, doc } from "firebase/firestore";

const NewPlayer = () => {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db, "users"), {
            name: {name},
            games: 0,
            won: 0,
            points: [],
            id: "",
        });
        if (docRef) {
            setSuccess(true);
            console.log(docRef.id);
            const newDocRef = doc(db, "users", docRef.id);
            await updateDoc(newDocRef, {id: docRef.id});
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