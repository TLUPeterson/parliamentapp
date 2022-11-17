import { React, useState }  from 'react';
import { Col, Row, Statistic, Button } from 'antd';
import 'antd/dist/antd.css';
import './teams.css';
import ShowPlayers from '../components/ShowPlayers/ShowPlayers';
import TeamBar from '../components/Header/Header';

const { Countdown } = Statistic;

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
  const queryString = window.location.pathname;
  const gamecode=queryString.substring(7)
  const team=localStorage.getItem('team');
  console.log()
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
  );
}   

export default Teams;