import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Input, Button } from 'antd';
//Game code so that players can access spesific game


function ShowPlayers(){
  const showPlayers = (e) => {
    gamesRef.on('value', snapshot  => {
      const data = snapshot.val();
      console.log(data.gamecode);
    })
  }
  


  return (
    
    <Button type="primary" onClick={showPlayers}>Primary Button</Button>
  )
}


export default ShowPlayers