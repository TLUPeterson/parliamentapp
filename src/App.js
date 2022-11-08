import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Teams from './pages/teams';
import CreateGame from './pages/CreateGame/createGame';
import JoinGame from './pages/JoinGame/JoinGame';

function App() {
/*
  const [user, setUser] = useState();

  function Logout(){
      setUser(null);
    }
    */
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/createGame" element={<CreateGame />} />
      <Route path="/join" element={<JoinGame />} />
  </Routes>
  );
}

export default App;
