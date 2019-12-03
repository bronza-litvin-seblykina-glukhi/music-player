import React from 'react';
import {Router, Route} from 'react-router';
import './App.css';
import {AUTH_ROUTE, LOGIN_ROUTE, MAIN_PAGE, RESTORE_PASSWORD} from './routesConfig';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import {Provider} from 'react-redux';
import Header from './components/Header/Header';
import history from './redux/history';
import configureStore from './redux/store'
import MainPage from './components/MainPage/MainPage';

function App() {
    return (
        <div>
            <Provider store={configureStore()}>}>
                <Header/>
                <Router history={history}>
                    <Route path={LOGIN_ROUTE} component={Login}/>
                    <Route path={AUTH_ROUTE} component={Registration}/>
                    <Route exact path={MAIN_PAGE} component={MainPage}/>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
