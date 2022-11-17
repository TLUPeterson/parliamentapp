import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Input, Button, Form } from 'antd';

var randomize = require('randomatic');

function JoinGameComp(){

//Player and gamecode state

const [player, setPlayer] = useState("");
const [gameCode, setGameCode] = useState("");

let thecode;
//if gamecode exist enter the lobby, else it creates a new game atm


const joinGame = (e) => {
  //e.preventDefault();
  //Custom id for player
  const playerid=randomize('Aa0', 10);
  const item = {
    player: player,
    playerid: playerid
  }
  //Set player name and id to localstorage
  localStorage.setItem('playerid', playerid);
  localStorage.setItem('playername', player);
  localStorage.setItem('gamecode', gameCode);
  thecode = gameCode;
  //Send player info to firebase db, might be unnecessary
  //gamesRef.child(thecode).child('players').child(playerid).set(player);

  let solSize;
  let libSize;
  let ecoSize;
  let traSize;
  var smallestTeam = '';
  gamesRef.child(gameCode).child('teams').on('value', snapshot => {
    if (snapshot.exists()) {
        const teams = snapshot.val();
        Object.entries(teams).forEach(entry => {

          if(entry[0] === 'teamSolidarity'){
            if(entry[1]==='null'){
              solSize=0;
            }else{
              solSize = Object.keys(entry[1]).length
            }
          }
          if(entry[0] === 'teamLiberty'){
            if(entry[1]==='null'){
              libSize=0;
            }else{
              libSize = Object.keys(entry[1]).length
            }
          }
          if(entry[0] === 'teamEcology'){
            if(entry[1]==='null'){
              ecoSize=0;
            }else{
              ecoSize = Object.keys(entry[1]).length
            }
          }
          if(entry[0] === 'teamTradition'){
            if(entry[1]==='null'){
              traSize=0;
            }else{
              traSize = Object.keys(entry[1]).length
            }
          }
        })
        var smallest = {
          'teamSolidarity': solSize,
          'teamLiberty': libSize,
          'teamEcology': ecoSize,
          'teamTradition': traSize
        };
        
        for (var key in smallest){
          if(smallestTeam  !== '' && smallest[key] < smallest[smallestTeam]){
            smallestTeam = key;
          }else if(smallestTeam === ''){
            smallestTeam = key;
          }
        }
  }})

  
if(!smallestTeam){
  console.log('not')
}else{
  console.log(smallestTeam);
  localStorage.setItem('team', smallestTeam);
  gamesRef.child(gameCode).child('teams').child(smallestTeam).child(playerid).set(player);
  //Go the game lobby
  window.location.href = '/teams/' + thecode;
}
  

}
  return (
    <div>

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

export default JoinGameComp;