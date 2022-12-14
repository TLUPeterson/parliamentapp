import { React, useState }  from 'react';
import { Col, Row, Statistic, Button } from 'antd';
import './teams.css';
import TeamBar from '../components/Header/Header';
import { gamesRef } from '../utils/fbConfig';

const { Countdown } = Statistic;

var gm = localStorage.getItem('gamemaster');

console.log(gm)

function Teams(){     


  var gamecode = localStorage.getItem('gamecode')
  console.log(gamecode)
  const startGame = () => {
    console.log('starting game');
    gamesRef.child(gamecode).child('flags').child('flag1').set(true);
  }
/////CHECKING FOR FLAG HERE
//On value change checks what it is, if true then goes ot next page

  gamesRef.child(gamecode).child('flags').on("child_changed", (snapshot) => {
    console.log('testing 2')
    console.log(snapshot)
    let flag1 = snapshot.val()
    console.log(flag1)
    if(gm==='false'){
      window.location.href = '/introduction';
    }else{
      console.log('I am the gm')
    }

  });
////////////////////////// #282C34
  const team=localStorage.getItem('team');
  console.log()
  console.log(typeof gm);
  if (gm==='true'){
    return (
      <div id='teamsDiv'>
        <div id='textAreaDiv'>
          <h2>Gamemaster View</h2>

          <div className="gamecode" id="gamecode">Enter the code to join:  </div>
          <p id="gamecodeactual" name="gamecode">{gamecode}</p>
          <p>Start the game when all the players have joined</p>
          <Button onClick={startGame} type="primary" size="large" className="gameBtn">Start game</Button>
        </div>

            

      </div>
    );
  }else{
  return (
    <>
    <div className="App-teams">
        <br/>
        <br/>
        <br/>
        <div>You belong to </div><div style={{color: "#fa541c", fontWeight: "bold", fontSize: "xxx-large"}}>{team}.</div><br/><br/>

        <div className="Instructions">
          Wait for the Gamemaster to start the game!
        </div>
        <div id="blockbutton">
        {/* <Button type="primary" onclick={toTeams}>Continue</Button> */}
        </div>
      <br/>
      <div id="Countdown">


      </div>
    </div>
    </>
  );}
}   

export default Teams;