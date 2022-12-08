import { Checkbox, InputNumber, Space, Progress, Radio } from 'antd';
import React, { useEffect, useState } from 'react';
import './Voting.css'
import { gamesRef } from "../../utils/fbConfig";

const End = () => {
  let path = "/end";
  window.location.href = path;
}

const gamecode = localStorage.getItem('gamecode');
const playerid = localStorage.getItem('playerid');
const team = localStorage.getItem('team');

const onChange = (value) => {
  console.log('changed', value);
};


function CreateGameComp(){
  const [value, setValue] = useState(3);
  const [percent, setPercent] = useState(0);
  const [vote, setVote] = useState('');
  const [avg, setAvg] = useState('');
  var posVote=0;
  var avgVote;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((percent) => (percent + 1) % 100);
    }, 1000);
    return () => {
    console.log(percent);
    clearInterval(interval)
   }
  }, []);


  const onChange = (e) => {
    setValue(e.target.value);
    e.preventDefault();
    gamesRef.child(gamecode).child('votes').child(team).child('vote1').set(value);

//Show the number of positive votes in div
    console.log((posVote));
  };
  const nr1onChange = (e) => { 
    gamesRef.child(gamecode).child('votes').child('vote1').child(team).set(e);

    gamesRef.child(gamecode).child('votes').child('vote1').on('value', (snapshot) => {
      var votes=[];
      snapshot.forEach((vote) => {
        votes.push(vote.val());
      });
      setVote(votes);
    });
  }
  var voteavg = 0;
  for(var i = 0; i < vote.length; i++) {
    voteavg += vote[i];
  }
  var avgvotebetweenteams = Math.round(voteavg / vote.length);
  //Set inital value to 1000, else its NaN
  if(isNaN(avgvotebetweenteams)){avgvotebetweenteams=1000}
  localStorage.setItem('avgvote', avgvotebetweenteams);


  return (
  <div id='votingDiv'>
      <h2>Voting</h2>
      <p>Creation of an agency to oversee the issue</p>
      <div id='checkboxArea'>
      {/* <Radio onChange={onChange} style={{color: "white"}}>We support it</Radio>
      <Radio onChange={onChange} style={{color: "white"}}>We don't support it</Radio>
      <Radio onChange={onChange} style={{color: "white"}}>Indifferent </Radio> */}
      <Radio.Group onChange={onChange} value={value}>
      <Radio value={2}>We support it</Radio>
      <Radio value={1}>We don't support it</Radio>
      <Radio value={3}>Indifferent</Radio>
    </Radio.Group>

    {/* <div>{posVote}</div> */}
    </div>

    <div id='numberArea'>
      <br/>
      <br/>
    <InputNumber
        defaultValue={1000}
        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
        onChange={nr1onChange}
      />
      
    </div>
    <div id='numberArea'>Current average budget: {avgvotebetweenteams}</div>

    <div id='progressArea'>
    <Progress
      type="circle"
      percent={percent}
      format={() => `${percent}%`}
    />
    </div>
    <Button type="primary" onClick={End}>To End Screen</Button>
  </div>
  
    
  )
}

export default CreateGameComp