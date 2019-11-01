import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
//redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
//create redux store ->reducers -> actions | applyMiddleware()

//provide the store to react
const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
<Provider><App/></Provider>, 
document.getElementById('root'));
serviceWorker.unregister();

