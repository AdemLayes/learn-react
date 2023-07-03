import './App.css';
import React from 'react';

export let person = {
  name: "Adem",
  age: 22,
  lang: "Arabic",
  hobby: [
    "coding",
    'vedio game'
  ],
  music: {
    old: "MJ",
    newest: "Dulipa"
  }
}
export default function App({ name, age: userAge, hobby: [firsthobby], music: {old}, pLang = "React" }) {
  return (
    <ul> <b>User info</b>
      <li>User name is : { name }</li>
      <li>User age is : { userAge }</li>
      <li>User favorite old music is : { old }</li>
      <li>User first hobby is : { firsthobby }</li>
      <li>User is learning : { pLang }</li>
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
)
// Class Component
export class ClassCar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "Civilian car"
    }
  }
  change = () => {
    if(this.state.type == "Civilian car") {
      this.setState({
        type: "Army car"
      });
    }else{
      this.setState({
        type: "Civilian car"
      });
    }
  }
  render() {
    return (
      <div>
        <h2>Class component</h2>
        <p>Using props: { this.props.name }</p>
        <p>Using state: { this.state.type }</p>
        <button type="button" onClick={ this.change }>Change</button>
      </div>
    )
  }
}

// Function Component
let cars = ["toyota", "kia", "ibiza"]
export function FunCar(props) {
  let clicked = (a, b) => {
    alert("The event type is :\n" + b.type)
  }
  let Goal = (props) => {
    if(props.goal) {
      return "the goal is complete";
    }else {
      return "didn't finish the goal";
    }
  }
  return (
    <div>
      <h2 onClick={(event) => clicked("test", event)}>Function component</h2>
      <h3>Usage of if/else statement</h3>
      <Goal goal={ false } />
    </div>
  )
}
export function MapFun(props) {
  let cars = ["Toyota", "Ibiza", "Kia"];
  let Maping = (props) => <li>{props.brand}</li>
  let Maping2 = (props) => <li>the owner is : {props.owner}</li>
  return (
    <>
      <h2>array <i>map</i></h2>
      <ol>
        { cars.map((elem) =>{
          return (
            <>
              <Maping brand={elem} />
              <Maping2 owner="Goku" />
           </>
          )
        }) }
      </ol>
    </>
  )
}