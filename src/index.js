import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as all from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {all.default(all.person)}
  </>
);