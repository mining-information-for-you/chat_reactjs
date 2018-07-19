import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Chat';
import registerServiceWorker from './registerServiceWorker';
import './include/bootstrap'

ReactDOM.render(<Chat />, document.getElementById('root'));
registerServiceWorker();
