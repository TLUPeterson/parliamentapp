import { React, useState }  from 'react';
import 'antd/dist/antd.css';
import CreateGameComp from '../../components/CreateGameComp/CreateGameComp';
import './createGame.css';

function CreateGame(){     

  return (
    <div className="App">
      <header className="App-header">
        <h2>Create New Game</h2>
        <div id="blockbutton">
        </div>
        <div>Enter a name and click on the "Continue" button</div>
        
      <CreateGameComp />
      
      
      </header>
    </div>
  );
}   

export default CreateGame;