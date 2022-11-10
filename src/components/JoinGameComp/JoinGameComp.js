import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Input, Button } from 'antd';
function JoinGameComp(){

//Player and gamecode state
//if gamecode exist enter the lobby else show error that gamecode does not exist
const [player, setPlayer] = useState("");
const [gameCode, setGameCode] = useState("");

let thecode;
const joinGame = (e) => {
  e.preventDefault();
  const item = {
    player: player
  }
  thecode = gameCode;
  gamesRef.child(thecode).child('players').push(item);

  //window.location.href = '/teams/' + thecode;

  //setPlayer("");
  //setGameCode("");
  //Send gamecode to next page with react component
  
}
  return (
    <form onSubmit={joinGame}>
      <Input value={player} onChange={(e) => setPlayer(e.target.value)} placeholder="Player name"/>
      <Input value={gameCode} onChange={(e) => setGameCode(e.target.value)} placeholder="Game code"/>
      <Button type="primary" form="creategame" onClick={joinGame}>Continue</Button>

    </form>
  )
}

export default JoinGameComp