import { React, useState }  from 'react';
import 'antd/dist/antd.css';
import CreateGameComp from '../../components/CreateGameComp/CreateGameComp';

function CreateGame(){     

  return (
    <div className="App">
      <header className="App-header">
      
        <div id="blockbutton">
        </div>
        <div>Choose a name and click on the button</div>
      <CreateGameComp />
      <br />
      
      </header>
    </div>
  );
}   

export default CreateGame;