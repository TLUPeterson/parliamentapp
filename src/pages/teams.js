import { React, useState }  from 'react';
import { Col, Row, Statistic, Button } from 'antd';
import 'antd/dist/antd.css';
import './teams.css';

const { Countdown } = Statistic;

let instructions1 = "(Teams have been made in this point) Please go to your teammates"
let deadlineInitial = Date.now() + 1000 * 5; // 1000 = 1 second
function Teams(){     
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
    console.log(this.props);


  return (
    <div className="App">
      <header className="App-header">
      
      
        <div className="Instructions">
          {instructions}
        </div>
        <div id="blockbutton">
        {/* <Button type="primary" onclick={toTeams}>Continue</Button> */}
        </div>
      
      <div id="Countdown">
      <Countdown title="Countdown"  value={deadlines} onFinish={onFinish} />

      </div>
      </header>
    </div>
  );
}   

export default Teams;