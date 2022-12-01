import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {  Statistic } from 'antd';

const { Countdown } = Statistic;
let deadlineInitial = Date.now() + 1000 * 15; // 1000 = 1 second
let instructions1 = "This is informative text  about the EU parliament and it describes what we are going to do in this rpg. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

function StageIntorduction(){  
  const [instructions, setNewInstruction] = useState(instructions1);
  const [deadlines, setNewDeadline] = useState(deadlineInitial);
//When countdown finishes runs this
  const onFinish = () => {
    console.log('finished!');
    window.location.href = '/quiz';
  };
    return (
      <div className="Home">
        
        <header className="App-header" style={{alignItems: 'center', justifyContent: 'center'}}>

          <div id="Countdown">
            <Countdown title="Countdown"  value={deadlines} onFinish={onFinish} />
            <br /> 
          </div>

          <img src="https://2019.cybersecforum.eu/media/PRELEGENCI_ansip2.png" className="App-logo" alt="ansip" />
          <div className="Instructions">
          {instructions}
        </div>

        </header>
    </div>
    );
}   

export default StageIntorduction;