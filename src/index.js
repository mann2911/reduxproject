import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import infoReducer from './store/reducers/info';

const store=createStore(infoReducer);
const app = (
    <Provider store={store}>
   
        <App />
 
    </Provider>
)
ReactDOM.render(app,document.getElementById('root'));


