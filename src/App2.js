import React, {useState} from 'react'
import './App2.css'
import json from "./delete.json"

export let users = [
  {id: 1, userName: "Jhon"},
  {id: 2, userName: "Bob"},
  {id: 3, userName: "Alex"}
]
// Using 'map' & 'Keys'
export default function Welcoming(props) {
  return(
    props.userN.length > 3?
    <li id='welcomingLi'>Welcome back <b>{props.userN}</b>, we missed you!</li>:
    <li id='welcomingLi'>Welcome back <b>{props.userN}</b>{", we didn't realy miss you"}</li>
  )
}

// rendering "form" in React
export function Form() {
  let [userEmail, setUserEmail] = useState("d")
  let [userPassword, setUserPassword] = useState("d")
  let [userThoughts, setUserThouts] = useState("d")

{/* storing the submited data to json file */}
let handleSubmit = (event) => {
  event.preventDefault();
  json.userEmail = userEmail
  json.userPassword = userPassword
  console.log(json.UserPassword)
}

  return(
  <div>
    <form id='userForm' onSubmit={handleSubmit}>
      <input
        id='email'
        type='email'
        placeholder='Email'
        value={userEmail}
        onChange={(event) => setUserEmail(event.target.value)}
        required
      />
      <input 
        type='password' 
        placeholder='Password' 
        value={userPassword}
        onChange={(event) => setUserPassword(event.target.value) }
        required 
      />
      <textarea
        minLength="1"
        maxLength="50"
        placeholder="Enter you thouts..."
        rows="4" cols="20"
        value={userThoughts}
        onChange={(event) => setUserThouts(event.target.value)}
      />
      <input type='submit' value="Enter" />
    </form>
    <ul>
      <li>User email is : {userEmail}</li>
      <li>User password is : {userPassword}</li>
      <li>User thoughts are : {userThoughts}</li>
    </ul>
    </div>  
  )
}