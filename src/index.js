import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {person, JsxTxt, FunCar, ClassCar} from './App.js';
import Welcome, {users, Form} from './App2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
{/* App components */}
    {App(person)}
    <hr/>
    {JsxTxt}
    <ClassCar name="Noh"/>
    <FunCar name="Adem" />
    <hr/>
{/* App2 components */}
    { users.map((user) => <Welcome key={user.id} userN={user.userName} />) }
    <Form />
</>
  </React.StrictMode>
);

// ' <></> ' are called fragment