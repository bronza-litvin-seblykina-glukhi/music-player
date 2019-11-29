import React from 'react';
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';
import './App.css';
import {AUTH_ROUTE, LOGIN_ROUTE, RESTORE_PASSWORD} from './routesConfig';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import {createStore} from 'redux';
import reducer from './redux/reducer';
import {Provider} from 'react-redux';
import Header from './components/Header/Header';
import history from './redux/history/history'

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer);

function App() {
    return (
        <div>
            <Header/>
            <Provider store={store}>
                <Router history={history}>
                    <Route path={LOGIN_ROUTE} exact component={Login}/>
                    <Route path={AUTH_ROUTE} component={Registration}/>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
