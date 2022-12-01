import React from 'react';
import 'antd/dist/antd.css';
import JoinGameComp from "../../components/JoinGameComp/JoinGameComp";
import './JoinGame.css';

const toTeams = () => {
  let path = "/teams";
  window.location.href = path;
}
function JoinGame(){     

  return (
    <div className="Home">
      <header className="App-header">
        <h2>Join Existing Game</h2>
        <>Enter your name and the gamecode</>
        <div id="blockbutton">
          <br />
          <JoinGameComp />
        </div>
      </header>
    </div>
  );
}   

export default JoinGame;