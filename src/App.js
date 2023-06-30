import './App.css';

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
export default function App({ name, age, music: {old} }) {
  return (
    <ul>
      <li>User name is : {name}</li>
      <li>User age is : {age}</li>
      <li>User favorite old music is : {old}</li>
    </ul>
  )
}
