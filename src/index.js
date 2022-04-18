import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyled from './assets/Styles/GlobalStyled'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


