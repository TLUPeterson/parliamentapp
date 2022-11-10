import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Input, Button, Form } from 'antd';
function JoinGameComp(){

//Player and gamecode state
//if gamecode exist enter the lobby else show error that gamecode does not exist
const [player, setPlayer] = useState("");
const [gameCode, setGameCode] = useState("");

let thecode;
const joinGame = (e) => {
  //e.preventDefault();
  const item = {
    player: player
  }
  thecode = gameCode;
  gamesRef.child(thecode).child('players').push(item);

  window.location.href = '/teams/' + thecode;

  
}
  return (
    <div>
    {/* <form onSubmit={joinGame}>
      <Input value={player} onChange={(e) => setPlayer(e.target.value)} placeholder="Player name"/>
      <Input value={gameCode} onChange={(e) => setGameCode(e.target.value)} placeholder="Game code"/>
      <Button type="primary" form="creategame" onClick={joinGame}>Continue</Button>

    </form> */}
    
      <Form onFinish={joinGame}>
        <Form.Item  name="pname" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input placeholder="Player name" value={player} onChange={(e) => setPlayer(e.target.value)}/>
        </Form.Item>

        <Form.Item  name="game code" rules={[{ required: true, message: 'Please the gamecode!' }]}>
          <Input placeholder="Game code" value={gameCode} onChange={(e) => setGameCode(e.target.value)}/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Join
        </Button>
      </Form.Item>
      </Form>
    </div>)
}

export default JoinGameComp