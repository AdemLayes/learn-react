import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {person, JsxTxt, FunCar, ClassCar} from './App.js';
import Welcome, {users, Form} from './App2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
    <Form />
  </>
  </React.StrictMode>
);

// ' <></> ' are called fragment