//https://medium.com/swlh/implementing-redux-in-react-d9cb1ab67665

//Initial state for the redux store
const initialState={
  playername: null,
  playerid: null,
  playerteam: null,
  ispartyleader:"no"
}

//This takes the initial state and the action and returns the new state based on forcoming action
function playerreducer (state = initialState, action) {
  switch (action.type) {
    case "SET_PLAYER":
      return {
        ...state,
        playername: action.playername,
        playerid: action.playerid,
        playerteam: action.playerteam,
        isteamleader: action.isteamleader
      }
    default:
      return state;
  }
}

export default playerreducer;