import {applyMiddleware, createStore, compose} from "redux";
import reducer from "./reducer";
import watcherSaga from "./sagas/sagas";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
      reducer,
      composeWithDevTools(
        applyMiddleware(sagaMiddleware)
      )
    );

    sagaMiddleware.run(watcherSaga);
    return store;
};

export default configureStore;
