import React from "react";
import img from "../../images/bronx-dice_logo.png"

const Home = () => {
    return (
        <div className="container">
            <div className="sub-container">
                <img src={img} alt="bronx-dice-logo" />
                 <div className="buttons-box">
                    <a href="/new-player">
                        <button className="btn nps-btn">New player</button>
                     </a>
                    <a href="/stats">
                        <button className="btn nps-btn">Statistics</button>
                     </a>
                 </div>
                <div className="new-game-btn-box">
                    <a href="/pre-game">
                        <button className="btn ng-btn">New game</button>
                    </a>
                 </div>
             </div>
        </div>
    );
}

export default Home;