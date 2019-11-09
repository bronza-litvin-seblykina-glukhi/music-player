import React from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { LOGIN_ROUTE } from './routesConfig';
import Login from './components/Login/Login';
import reducer from './redux/reducer';
import watchRequests from './redux/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchRequests);

function App() {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route path={LOGIN_ROUTE} component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
