import './App.css';
import React from 'react';

export let person = {
  name: "Adem",
  age: 22,
  lang: "Arabic",
  hoby: [
    "coding",
    'vedio game'
  ],
  music: {
    old: "MJ",
    newest: "Dulipa"
  }
}
export default function App({ name, age: userAge, music: {old}, pLang = "React" }) {
  return (
    <ul> <b>User info</b>
      <li>User name is : {name}</li>
      <li>User age is : {userAge}</li>
      <li>User favorite old music is : {old}</li>
      <li>User is learning : {pLang}</li>
    </ul>
  )
}
// Regular JSX variable
export let JsxTxt = (
  <div>
    <h2>JSX</h2>
    <p>This is a <i>JSX</i></p>
    <p>Its cool right ? :)</p>
  </div>
);
// Class Component
export class ClassCar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Class component</h2>
        <p>This is a <i>class component</i>.</p>
        <p>This is props: {this.props.name}</p>
      </div>
    )
  }
}
// Function Component
export function FunCar(props) {
  return (
    <div>
      <h2>Function component</h2>
      <p>This is a <i>Function component</i>.</p>
      <p>This is props: {props.name.length > 3? "Valid": "invalid"}</p>
      <ClassCar name="Ayoub" />
    </div>
  )
}