import React from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import './App.css';
import { LOGIN_ROUTE } from './routesConfig';
import Login from './components/Login/Login';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer);

function App() {
  console.log(111112);
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route path={LOGIN_ROUTE} component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
