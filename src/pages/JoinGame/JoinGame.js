import React from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import JoinGameComp from "../../components/JoinGameComp/JoinGameComp";

const toTeams = () => {
  let path = "/teams";
  window.location.href = path;
}
function JoinGame(){     

  return (
    <div className="Home">
      <header className="App-header">

        <div id="blockbutton">
        <JoinGameComp />
        </div>
      </header>
    </div>
  );
}   

export default JoinGame;