import React from 'react';
import logo from '../eplogo.svg';
import { Button } from 'antd';
import './home.css';
import 'antd/dist/antd.css';

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
          Welcome to parlamentarium app
        </p>
        <div id="blockbutton">
        <Button type="primary" onClick={joinGame}>Join</Button>
        <Button type="primary" onClick={CreateGame}>Create</Button>
        </div>
      </header>
    </div>
  );
}   

export default Home;