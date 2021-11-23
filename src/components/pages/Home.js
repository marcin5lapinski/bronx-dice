import React from "react";
import img from "../../images/bronx-dice_logo.png"

const Home = () => {
    return (
        <div class="container">
  <div class="sub-container">
    <img src={img} alt="bronx-dice-logo" />
    <div class="buttons-box">
      <a href="/new-player">
        <button class="btn nps-btn">New player</button>
      </a>
      <a href="/stats">
        <button class="btn nps-btn">Statistics</button>
      </a>
    </div>
    <div class="new-game-btn-box">
        <a href="/pre-game">
          <button class="btn ng-btn">New game</button>
        </a>
      </div>
  </div>
</div>
    );
}

export default Home;