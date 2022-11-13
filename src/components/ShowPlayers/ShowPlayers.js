import { useState } from "react";
import { gamesRef } from "../../utils/fbConfig";
import { Button, Table, Tag } from 'antd';
//Game code so that players can access spesific game

//Get gamecode though url, SHOULD BE DONE THOUGH PROPS
//TODO: Get gamecode through props
const queryString = window.location.pathname;
const gamecode=queryString.substring(7)


function ShowPlayers(){
  let [playerdata, setPlayerdata] = useState([]);

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
    {/* <Button type="primary" onClick={showPlayers}>Primary Button</Button> */}
    </div>
  )
}


export default ShowPlayers