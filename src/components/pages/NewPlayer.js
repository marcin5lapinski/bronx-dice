import React from "react";

const NewPlayer = () => {
    return (
        <div className="container">
            <a href="/"><button className="back-btn"></button></a>
            <div className="sub-container">
                <form className="new-player--form">
                    <input type="text" name="name" placeholder="Enter your name/nickname" className="new-player--input" minlength="2" maxlength="12" />
                     <button className="btn save-player--btn">Save</button>
                 </form>
             </div>
        </div>
    );
}

export default NewPlayer;