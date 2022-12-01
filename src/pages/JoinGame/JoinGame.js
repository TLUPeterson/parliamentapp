import React from 'react';
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
        <>Enter your name and the gamecode</>
        <div id="blockbutton">
        <JoinGameComp />
        </div>
      </header>
    </div>
  );
}   

export default JoinGame;