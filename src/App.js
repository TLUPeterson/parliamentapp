import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Teams from './pages/teams';
import CreateGame from './pages/CreateGame/createGame';
import JoinGame from './pages/JoinGame/JoinGame';
import { configureStore } from '@reduxjs/toolkit';
import playerreducer from './store/allreducers';
import Voting from './pages/Voting/Voting';
import Quiz from './pages/Quiz/Quiz';
import ImagesPage from './pages/ImagesPage/ImagesPage';
import StageIntroduction from './pages/Stage_Introduction/Stage_Introduction';
function App() {

  //const [user, setUser] = useState();
/*
  function Logout(){
      setUser(null);
    }
    */
    const store = configureStore({ reducer: playerreducer })
    store.subscribe(() => console.log(store.getState()))
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="teams" element={<Teams />} /> */}
          <Route path="/teams/:gamecode" element={<Teams />} />
        <Route path="/createGame" element={<CreateGame />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/quiz" element={<Quiz />} />
      <Route path="/join" element={<JoinGame /*setUser = {setUser} user={user}*//>} />
      <Route path="/images" element={<ImagesPage />} />
      <Route path="/introduction" element={<StageIntroduction />} />
  </Routes>
  </>
  );
}

export default App;
