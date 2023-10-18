import React, {useState, useEffect} from "react";
import TeamList from "./TeamList";
import { handleRef } from "@fluentui/react-component-ref";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
const URL = "http://localhost:3000/teams"
const usersURL = "http://localhost:3000/users"

const NewTeam = () => {
  const [pickTeam, setPickTeam] = useState({})
  const navigate = useNavigate()
  const {teams} = useOutletContext();
  const {handleSubmit} = useOutletContext();
  const {loggedInUser} = useOutletContext();
  // const {newTeam} = useOutletContext();
  // const {handleChange} = useOutletContext();
  const [newTeam ,setNewTeam] = useState({
    name: "",
    image: "",
    owner: "",
    players: []
})
 
const handleChange = ({target: {name, value}}) => {
  setNewTeam(currentNewTeam => {
    return {
      ...currentNewTeam,
      [name]: value
  }
  })
} 
  const handlePickTeam = (pickedTeam) => {
    
    setPickTeam(pickedTeam)
    navigate("/myTeam")
  }
const onSubmit = (e) => {
  e.preventDefault()
  handleSubmit(newTeam)
  setNewTeam({
    name: "",
    image: "",
    owner: "",
    players: []
})
}

console.log(newTeam)
  return (
    <div id="newTeamForm">
    <form id="form" onSubmit={onSubmit}>
        <label htmlFor="fname">Team name:</label>
        <br/>
        <input type="text" id="fname" name="name" value={newTeam.name} onChange={(e) => handleChange(e)}/>
          <br/>
        <label htmlFor="lname">Image url:</label>
        <br/>
        <input type="text" id="lname" name="image" value={newTeam.image} onChange={e => handleChange(e)}/>
          <br/>
          <label htmlFor="fname">Owners name:</label>
        <br/>
        <input type="text" id="fname" name="owner" value={newTeam.owner} onChange={e => handleChange(e)}/>
          <br/>
        <input type="submit" value="Submit"/>
    </form>
      {
        <TeamList teams={teams} handlePickTeam={handlePickTeam}/>
      }
    </div>
    
  )
}

export default NewTeam