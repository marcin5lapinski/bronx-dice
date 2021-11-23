import React from "react";

const NewPlayer = () => {
    return (
        <div class="container">
            <a href="/"><button class="back-btn"></button></a>
            <div class="sub-container">
                <form class="new-player--form">
                    <input type="text" name="name" placeholder="Enter your name/nickname" class="new-player--input" minlength="2" maxlength="12" />
                     <button class="btn save-player--btn">Save</button>
                 </form>
             </div>
        </div>
    );
}

export default NewPlayer;