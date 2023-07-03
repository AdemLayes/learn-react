import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {person, JsxTxt, FunCar, ClassCar, MapFun} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
    {App(person)}
    {JsxTxt}
    <ClassCar name="Noh"/>
    <FunCar name="Adem" />
    <MapFun />
  </>
  </React.StrictMode>
);

// ' <></> ' are called fragment