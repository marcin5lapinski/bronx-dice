import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./components/pages/Home";
import NewPlayer from "./components/pages/NewPlayer";
import Statistics from "./components/pages/Statistics";
import PreGame from "./components/pages/PreGame";
import GameScreen from "./components/pages/GameScreen";
import "./scss/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new-player" element={<NewPlayer />} />
        <Route exact path="/stats" element={<Statistics />} />
        <Route exact path="/pre-game" element={<PreGame />} />
        <Route exact path="/game-screen" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;