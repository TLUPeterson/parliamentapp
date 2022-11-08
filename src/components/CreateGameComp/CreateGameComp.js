import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Input } from 'antd';
import { Link } from 'react-router-dom';
//Game code so that players can access spesific game
var randomize = require('randomatic');

function CreateGameComp(){
  const [game, setGame] = useState("");

  const createGame = (e) => {
    let gamecode = randomize('A0', 5)
    e.preventDefault();
    const item = {
      name: game,
      code: gamecode,
    }
    gamesRef.push(item);
    //setGame("");
    //Send gamecode to next page with react component
    window.location.href = "/teams";

    <Link to ={{pathname:'/teams', state: {gamecode: gamecode}}}>Test</Link>

  }

  return (
    <form onSubmit={createGame}>
      <Input value={game} onChange={(e) => setGame(e.target.value)} placeholder="Firebase entry"/>
    </form>
  )
}

export default CreateGameComp