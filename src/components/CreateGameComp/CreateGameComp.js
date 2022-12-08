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

  const createGame = (e) => {
    //Creating custom room and player ids
    let gamecode = randomize('A0', 5)
    const playerid=randomize('Aa0', 10);

    e.preventDefault();
    //player model for db

    const teams = {
      teamSolidarity: 'null',
      teamLiberty: 'null',
      teamEcology: 'null',
      teamTradition: 'null'
    }

    //Putting player info to firebase db, under custom room id
    //Might be useless
    //gamesRef.child(gamecode).child('players').child(playerid).set(player);
    //Not this
    gamesRef.child(gamecode).child('teams').set(teams);

    //Get random nr between 0-3, and push player to that team
    /*
    const randteam = Math.floor(Math.random() * 4);
    console.log(randteam);
    if(randteam===0){gamesRef.child(gamecode).child('teams').child('teamSolidarity').child(playerid).set(player);
    localStorage.setItem('team', 'teamSolidarity')}
    if(randteam===1){gamesRef.child(gamecode).child('teams').child('teamLiberty').child(playerid).set(player);
    localStorage.setItem('team', 'teamLiberty')}
    if(randteam===2){gamesRef.child(gamecode).child('teams').child('teamEcology').child(playerid).set(player);
    localStorage.setItem('team', 'teamEcology')}
    if(randteam===3){gamesRef.child(gamecode).child('teams').child('teamTradition').child(playerid).set(player);
    localStorage.setItem('team', 'teamTradition')}*/

    //Not pushing this player into any normla teams. GAME MASTER HERE
    gamesRef.child(gamecode).child('teams').child('GAMEMASTER').child(playerid).set(player);
    //Game flags to continou the game for all players here
    gamesRef.child(gamecode).child('flags').child('flag1').set(false);
    //Putting player info to localstorage 
    localStorage.setItem('playerid', playerid);
    localStorage.setItem('playername', player);
    localStorage.setItem('gamecode', gamecode);
    localStorage.setItem('gamemaster', true);


    //Send gamecode to next page with  ~~react component~~ simple url methods
    //TODO:Should probably send data with react component
    window.location.href = '/teams/' + gamecode;

  }

  return (
    <div>
    <form id="creategame" onSubmit={createGame}>
      {/* <Input value={player} onChange={(e) => setPlayer(e.target.value)} placeholder="Player name"/> */}

      <Button type="primary" className="createButton" form="creategame" onClick={createGame}>Create</Button>
    </form> 

    
    </div>
  )
}

export default CreateGameComp