import React from 'react';
import {Router, Route} from 'react-router';
import './App.css';
import {AUTH_ROUTE, LOGIN_ROUTE, RESTORE_PASSWORD} from './routesConfig';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import {Provider} from 'react-redux';
import Header from './components/Header/Header';
import {createBrowserHistory} from "history";
import configureStore from './redux/store'

function App() {
    return (
        <div>
            <Header/>
            <Provider store={configureStore()}>}>
                <Router history={createBrowserHistory()}>
                    <Route path={LOGIN_ROUTE} exact component={Login}/>
                    <Route path={AUTH_ROUTE} component={Registration}/>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
