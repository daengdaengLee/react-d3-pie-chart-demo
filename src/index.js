import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import MainPage from './components/5-pages/main-page';

injectGlobal`
  ${reset}
  html, body, #root {
    height: 100%;
  }
`;

ReactDOM.render(<MainPage />, document.getElementById('root'));
