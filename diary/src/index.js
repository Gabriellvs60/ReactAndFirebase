import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//Components
import NoteDetail from './components/NoteDetail';
import App from './components/App';
import Login from '../src/components/Login';
import registerServiceWorker from './registerServiceWorker';
//redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './routes/Header';
import LoadingComponent from './components/LoadingComponent';
import AuthenticatedComponent from './components/AuthenticatedComponent';

//create redux store ->reducers -> actions | applyMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//provide the store to react
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <LoadingComponent>
                <div>
                    <Switch>
                        <Route path="/login" component={Login} exact={true} />
                        <AuthenticatedComponent>
                            <Header />
                            <Route path="/" component={App} exact={true} />
                        </AuthenticatedComponent>
                        <Route path="/:id" component={NoteDetail} exact={true} />
                    </Switch>
                </div>
            </LoadingComponent>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

