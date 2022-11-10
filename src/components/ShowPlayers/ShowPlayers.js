import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Button, Table, Tag } from 'antd';
//Game code so that players can access spesific game

const queryString = window.location.pathname;
const gamecode=queryString.substring(7)
function ShowPlayers(){
  let [playerdata, setPlayerdata] = useState([]);
  const showPlayers = (e) => {
    e.preventDefault();
    gamesRef.child(gamecode).child("players").on("value", (snapshot) => {
      let players = snapshot.val()
      Object.entries(players).forEach(entry => {
        const [key, value] = entry;
        //Check which teams already have members firebase. push into which has least amount of members
        let random=Math.floor(Math.random() * 4)
        console.log(random)
        if(random==0){playerdata.push({id: key, name:value.player, teams:['Solidarity']})}
        if(random==1){playerdata.push({id: key, name:value.player, teams:['Ecology']})}
        if(random==2){playerdata.push({id: key, name:value.player, teams:['Liberty']})}
        if(random==3){playerdata.push({id: key, name:value.player, teams:['Tradition']})}
        
      });

    });
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Teams',
      key: 'teams',
      dataIndex: 'teams',
      render: (_, { teams }) => (
        <>
          {teams.map((team) => {
            let color ;
            if (team === 'Ecology') {
              color = '#7cb305';
            }
            if (team === 'Solidarity') {
              color = '#f5222d';
            }
            if (team === 'Liberty') {
              color = '#fadb14';
            }
            if (team === 'Tradition') {
              color = '#434343';
            }
            return (
              <Tag color={color} key={team}>
                {team.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ]

  return (
    <div> 
    <Table columns={columns} dataSource={playerdata} key={playerdata} />
    <Button type="primary" onClick={showPlayers}>Primary Button</Button>
    </div>
  )
}


export default ShowPlayers