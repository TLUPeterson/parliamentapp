import { React, useState }  from 'react';
import { Col, Row, Statistic, Button } from 'antd';
import 'antd/dist/antd.css';
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
      window.location.href = '/quiz';
    }else{
      console.log('I am the gm')
    }

  });
//////////////////////////
  const team=localStorage.getItem('team');
  console.log()
  console.log(typeof gm);
  if (gm==='true'){
    return (
      <div style={{color: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <div >
          <Button onClick={startGame} type="primary" size="large" style={{alignItems: 'center', justifyContent: 'center', margin: 'auto'}}>Start game</Button>
        </div >
        <div className="gamecode" id="gamecode">Enter the code to join:  </div>
        <p id="gamecodeactual" name="gamecode">{gamecode}</p>
        
      </div>
    );
  }else{
  return (
    <>
    <TeamBar />
    <div className="App-teams">
      
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