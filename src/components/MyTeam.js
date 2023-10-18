import React, {useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import TeamList from "./TeamList";
const URL = "http://localhost:3000/teams"

function MyTeam() {
  const {myTeam, teams, selectedTeam, handleSaveTeam} = useOutletContext();
  // const {draftPlayers} = useOutletContext();
  const {handlePickTeam} = useOutletContext();
  const {pickTeam} = useOutletContext();
  const [myTeamPlayers, setMyTeamPlayers] = useState([])
  const filterMyTeam = myTeam.filter(player => player.isDrafted !== false)
  const loggedInUser = window.localStorage.getItem("user")

  return (

  <div id="yourTeam">
      <h3>{selectedTeam}</h3>
      <ul id="yourTeamList">
        {myTeam.length ? filterMyTeam.map(player => <PlayerCard key={player.id} player={player} />) : null}
      </ul>
      {/* <button onClick={draftPlayers}>Add Players To Team</button> */}
      <table id="pickTeam">
        <TeamList teams={teams} handlePickTeam={handlePickTeam}/>
      </table>    
  </div>
  )
}

export default MyTeam