import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Input } from 'antd';
//Game code so that players can access spesific game
var randomize = require('randomatic');
let gamecode = randomize('A0', 5)

function JoinGameComp(){
  const [game, setGame] = useState("");

  const createGame = (e) => {
    e.preventDefault();
    const item = {
      name: game,
      code: gamecode,
    }
    gamesRef.push(item);
    setGame("");
  }

  return (
    <form onSubmit={createGame}>
      <Input value={game} onChange={(e) => setGame(e.target.value)} placeholder="Basic Usage"/>
      <Input />
    </form>
  )
}

export default JoinGameComp