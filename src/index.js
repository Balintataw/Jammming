import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';                     //check path
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
