import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { useState } from "react";
import Home from "./components/pages/Home";
import NewPlayer from "./components/pages/NewPlayer";
import Statistics from "./components/pages/Statistics";
import PreGame from "./components/pages/PreGame";
import GameScreen from "./components/pages/GameScreen";
import "./scss/main.scss";

function App() {
  const [playerOne, setPlayerOne] = useState('Zordon');
  const [playerTwo, setPlayerTwo] = useState('Zordon');
  const [playerThree, setPlayerThree] = useState('Zordon');
  const [playerFour, setPlayerFour] = useState('Zordon');
  const [playerFive, setPlayerFive] = useState('Zordon');
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const playersArray = [playerOne, playerTwo, playerThree, playerFour, playerFive];

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new-player" element={<NewPlayer />} />
        <Route exact path="/stats" element={<Statistics />} />
        <Route 
            exact 
            path="/pre-game" 
            element={
                <PreGame 
                    playersArray={playersArray}
                    setPlayerOne={setPlayerOne} 
                    playerOne={playerOne}
                    setPlayerTwo={setPlayerTwo} 
                    playerTwo={playerTwo}
                    setPlayerThree={setPlayerThree} 
                    playerThree={playerThree}
                    setPlayerFour={setPlayerFour}
                    playerFour={playerFour}
                    setPlayerFive={setPlayerFive}
                    playerFive={playerFive}
                    numberOfPlayers={numberOfPlayers} 
                    setNumberOfPlayers={setNumberOfPlayers}
            />} 
        />
        <Route exact path="/game-screen" element={<GameScreen playersArray={playersArray} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;