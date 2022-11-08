import { React, useState }  from 'react';
import { Col, Row, Statistic, Button } from 'antd';
import 'antd/dist/antd.css';
import CreateGameComp from '../../components/CreateGameComp/CreateGameComp';


const { Countdown } = Statistic;
const toTeams = () => {
  let path = "/teams";
  window.location.href = path;
}

let instructions1 = "test2"
let deadlineInitial = Date.now() + 1000 * 5; // 1000 = 1 second
function CreateGame(){     
  const [instructions, setNewInstruction] = useState(instructions1);
  const [deadlines, setNewDeadline] = useState(deadlineInitial);
  //Change contents of div with id="Instructions" on finish
  const onFinish = () => {
    console.log('finished!');
    const value = "Please go through your teams' as well as the other teams' manifesto";
    setNewInstruction(value);
    const deadlinevalue = Date.now() + 1000 * 6;
    setNewDeadline(deadlinevalue)
  };

  return (
    <div className="App">
      <header className="App-header">
      
      
        <div className="Instructions">
          {instructions}
        </div>
        <div id="blockbutton">
        </div>
      <CreateGameComp />
      <div id="Countdown">
      <Countdown title="Countdown"  value={deadlines} onFinish={onFinish} />
      <br />
      <Button type="primary" onClick={toTeams}>Continue</Button>
      </div>
      </header>
    </div>
  );
}   

export default CreateGame;