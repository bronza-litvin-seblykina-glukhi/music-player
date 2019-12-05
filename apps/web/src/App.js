import React from 'react';
import {Router, Route} from 'react-router';
import './App.css';
import {AUTH_ROUTE, LOGIN_ROUTE, RESET_PASSWORD, SUBMIT_RESET_PASSWORD, LOGOUT} from './routesConfig';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import {Provider} from 'react-redux';
import Header from './components/Header/Header';
import history from './redux/history';
import configureStore from './redux/store'
import ResetPassword from './components/ResetPassword/ResetPassword';
import SubmitReset from './components/ResetPassword/SubmitResetPassword';
import Logout from './components/Logout/Logout';

function App() {
    return (
        <div>
            <Provider store={configureStore()}>}>
                <Header/>
                <Router history={history}>
                    <Route path={LOGIN_ROUTE} exact component={Login}/>
                    <Route path={AUTH_ROUTE} component={Registration}/>
                    <Route path={RESET_PASSWORD} component={ResetPassword}/>
                    <Route path={SUBMIT_RESET_PASSWORD} component={SubmitReset}/>
                    <Route path={LOGOUT} component={Logout}/>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
