import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {  Statistic } from 'antd';

const { Countdown } = Statistic;
let deadlineInitial = Date.now() + 1000 * 15; // 1000 = 1 second
let instructions1 = `
Let me first congratulate you on your election to the European Parliament. You are
now officially elected representatives of the people of the European Union for a
period of 5 years. This is an honour as much as it is a great responsibility. During
these 5 years, you are going to pass legislation proposed by the European
Commission, which will affect the lives of 500 million citizens across Europe.`;

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
          <div>Dear Members of the European Parliament,</div>
          <div className="Instructions">
          {instructions}
        </div>

        </header>
    </div>
    );
}   

export default StageIntorduction;