import { Routes, Route } from "react-router-dom";
import { SingleSongScreen } from "../src/routes/singleSong.screen";
import { Home } from "./component/home.component";
function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="song/:id" element={<SingleSongScreen />} />
    </Routes>
  );
}

export default App;
