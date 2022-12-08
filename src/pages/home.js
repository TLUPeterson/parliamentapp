import React from 'react';
import logo from '../eplogo.svg';
import { Button } from 'antd';
import './home.css';

const joinGame = () => {
  let path = "/join";
  window.location.href = path;
}
const CreateGame = () => {
  let path = "/createGame";
  window.location.href = path;
}

function Home(){     

  return (
    <div className="Home">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to the Parlamentarium App!
        </p>
        <div id="blockbutton">
        <Button type="primary" className="homeButton" onClick={joinGame}>Join Existing Game</Button>
        <br />
        <Button type="primary" className="homeButton" onClick={CreateGame}>Create New Game</Button>
        </div>
      </header>
    </div>
  );
}   

export default Home;