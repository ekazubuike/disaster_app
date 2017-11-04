import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
// require("react-datepicker/dist/react-datepicker-cssmodules.css");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
