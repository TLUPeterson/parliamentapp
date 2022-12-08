import { React, useState }  from 'react';
import CreateGameComp from '../../components/CreateGameComp/CreateGameComp';
import './createGame.css';
import logo from '../..//eplogo.svg';

function CreateGame(){     

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

        <h2>Create a New Game</h2>
        <div id="blockbutton">
        </div>
        <div>Click on the button and share the gamecode with your players</div>
        
      <CreateGameComp />
      
      
      </header>
    </div>
  );
}   

export default CreateGame;