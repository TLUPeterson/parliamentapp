import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Input, Button, Form } from 'antd';
//Game code so that players can access spesific game
var randomize = require('randomatic');
/*
const toTeams = () => {
  let path = "/teams";
  window.location.href = path;
}*/

function CreateGameComp(){
  //const [game, setGame] = useState("");
  const [player, setPlayer] = useState("");
  let thecode;

  const createGame = (e) => {
    //Creating custom room and player ids
    let gamecode = randomize('A0', 5)
    const playerid=randomize('Aa0', 10);

    e.preventDefault();
    //player model for db
    const playeritem = {
      player: player,
      playerid: playerid
    }
    const teams = {
      teamSolidarity: 'null',
      teamLiberty: 'null',
      teamEcology: 'null',
      teamTradition: 'null'
    }
    //Putting player info to localstorage 
    localStorage.setItem('playerid', playerid);
    localStorage.setItem('playername', player);
    //Putting player info to firebase db, under custom room id
    //Might be useless
    gamesRef.child(gamecode).child('players').child(playerid).set(player);
    //Not this
    gamesRef.child(gamecode).child('teams').set(teams);

    //Get random nr between 0-3, and push player to that team
    const randteam = Math.floor(Math.random() * 4);
    console.log(randteam);
    if(randteam===0){gamesRef.child(gamecode).child('teams').child('teamSolidarity').child(playerid).set(player);}
    if(randteam===1){gamesRef.child(gamecode).child('teams').child('teamLiberty').child(playerid).set(player);}
    if(randteam===2){gamesRef.child(gamecode).child('teams').child('teamEcology').child(playerid).set(player);}
    if(randteam===3){gamesRef.child(gamecode).child('teams').child('teamTradition').child(playerid).set(player);}
    
    //Send gamecode to next page with  ~~react component~~ simple url methods
    //TODO:Should probably send data with react component
    thecode = gamecode;
    console.log(thecode)
    window.location.href = '/teams/' + thecode;

  }

  return (
    <div>
    <form id="creategame" onSubmit={createGame}>
      <Input value={player} onChange={(e) => setPlayer(e.target.value)} placeholder="Player name"/>

      <Button type="primary" form="creategame" onClick={createGame}>Continue</Button>
    </form> 

    
    </div>
  )
}

export default CreateGameComp