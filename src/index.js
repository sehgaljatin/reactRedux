import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storedData from './store/index';
import './index.css';
import App from './App';

ReactDOM.render(<Provider store={storedData}>
    <App />
</Provider>
, document.getElementById('root'));
