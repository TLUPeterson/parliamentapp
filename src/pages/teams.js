import { React, useState }  from 'react';
import { Col, Row, Statistic, Button } from 'antd';
import 'antd/dist/antd.css';
import './teams.css';
import ShowPlayers from '../components/ShowPlayers/ShowPlayers';
import TeamBar from '../components/Header/Header';
import { gamesRef } from '../utils/fbConfig';

const { Countdown } = Statistic;

var gm = localStorage.getItem('gamemaster');

console.log(gm)
let instructions1 = "(Teams have been made in this point) Please go to your teammates"
let deadlineInitial = Date.now() + 1000 * 5; // 1000 = 1 second

const TempVotingPath = () => {
  let path = "/voting";
  window.location.href = path;
}

function Teams(){     
  const [instructions, setNewInstruction] = useState(instructions1);
  const [deadlines, setNewDeadline] = useState(deadlineInitial);
  //Change contents of div with id="Instructions" on finish
  const onFinish = () => {
    console.log('finished!');
    const value = "Please go through the manifestos";
    setNewInstruction(value);
    onFinish2();
  };
  const onFinish2 = () => {
    
    const deadlinevalue = Date.now() + 1000 * 6;
    setNewDeadline(deadlinevalue)
    console.log('finished!');
  };

  var gamecode = localStorage.getItem('gamecode')
  console.log(gamecode)
  const startGame = () => {
    console.log('starting game');
    gamesRef.child(gamecode).child('flags').child('flag1').set(true);
  }
/////CHECKING FOR FLAG HERE
  console.log('here')
//On calue change checks what it is, if true then goes ot next page

  console.log('testing here')
  gamesRef.child(gamecode).child('flags').on("child_changed", (snapshot) => {
    console.log('testing 2')
    console.log(snapshot)
    let flag1 = snapshot.val()
    console.log(flag1)
      window.location.href = '/quiz';

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
        </div>
        {gamecode}
      </div>
    );
  }else{
  return (
    <>
    <TeamBar />
    <div className="App-teams">
      
        <div>You belong to </div><div style={{color: "#fa541c"}}>{team}</div><br/><br/>
        <div>Enter the code to join: </div>
        <div name="gamecode" id="gamecode">{gamecode}</div>
        <div className="Instructions">
          {instructions}
        </div>
        <div id="blockbutton">
        {/* <Button type="primary" onclick={toTeams}>Continue</Button> */}
        </div>
      <br/>
      <div id="Countdown">
      <Countdown title="Countdown"  value={deadlines} onFinish={onFinish} />


      </div>
      <Button type="primary" onClick={TempVotingPath}>Temp voting path</Button>
    </div>
    </>
  );}
}   

export default Teams;