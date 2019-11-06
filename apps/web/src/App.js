import React from 'react';
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';
import './App.css';
import {AUTH_ROUTE, LOGIN_ROUTE} from './routesConfig';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { LOGIN_ROUTE } from './routesConfig';
import Login from './components/Login/Login';
import Registration from './components/registration/Registration'
import {createStore} from 'redux';
import reducer from './redux/reducer';
import {Provider} from 'react-redux';
import watchRequests from './redux/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchRequests);

function App() {
    return (
        <Provider store={store}>
            <Router history={createBrowserHistory()}>
                <Route path={LOGIN_ROUTE} exact component={Login}/>
                <Route path={AUTH_ROUTE} component={Registration}/>
            </Router>
        </Provider>
    );
}

export default App;
