import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom';
//Game code so that players can access spesific game
var randomize = require('randomatic');
/*
const toTeams = () => {
  let path = "/teams";
  window.location.href = path;
}*/

function CreateGameComp(){
  //const [game, setGame] = useState("");
  const [name, setName] = useState("");
  let thecode;

  const createGame = (e) => {
    let gamecode = randomize('A0', 5)
    e.preventDefault();
    /*const item = {
      name: game,
    }*/
    const playeritem = {
      player: name,
    }
    //gamesRef.child(gamecode).set(item);
    gamesRef.child(gamecode).child('players').push(playeritem);
    //setGame("");
    //Send gamecode to next page with react component
    thecode = gamecode;
    console.log(thecode)
    window.location.href = '/teams/' + thecode;

  }

  return (
    <div>
    <form id="creategame" onSubmit={createGame}>
      {/* <Input value={game} onChange={(e) => setGame(e.target.value)} placeholder="Game name"/> */}
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Player name"/>

      <Button type="primary" form="creategame" onClick={createGame}>Continue</Button>
    </form> 
{/* 
    <Form onFinish={createGame}>
      <Form.Item  rules={[{ required: true, message: 'Please enter name for the game!' }]} >

      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Player name"/>
      <Button type="primary" form="creategame" onClick={createGame}>Continue</Button>
      </Form.Item>

    </Form> */}
    
    </div>
  )
}

export default CreateGameComp