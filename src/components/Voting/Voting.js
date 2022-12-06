import { Checkbox, InputNumber, Space, Progress } from 'antd';
import React, { useEffect, useState } from 'react';
import './Voting.css'
import { gamesRef } from "../../utils/fbConfig";

const gamecode = localStorage.getItem('gamecode');
const playerid = localStorage.getItem('playerid');
const team = localStorage.getItem('team');

const onChange = (value) => {
  console.log('changed', value);
};


function CreateGameComp(){
  const [percent, setPercent] = useState(0);
  const [vote, setVote] = useState('');
  const [avg, setAvg] = useState('');
  var posVote=0;
  var avgVote;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((percent) => (percent + 1) % 100);
    }, 1000);
    return () => clearInterval(interval);
  }, []);



  const onChange = (e) => {
    let value=e.target.checked
    
    e.preventDefault();
    gamesRef.child(gamecode).child('votes').child(team).child('vote1').set(value);

//Show the number of positive votes in div
    console.log((posVote));
  };
  const nr1onChange = (e) => { 
    console.log('changed', e);
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
  var test = Math.round(voteavg / vote.length);

  return (
  <div>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Space>
      <InputNumber
        defaultValue={1000}
        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
        onChange={nr1onChange}
      />
      <div>Avg budget is: {test}</div>

    </Space>
      <div>{posVote}</div>

      <Progress
      type="circle"
      percent={percent}
      format={() => `${percent}%`}
    />
  </div>
    
  )
}

export default CreateGameComp