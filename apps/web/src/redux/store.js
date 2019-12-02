import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import watcherSaga from "./sagas/sagas";
import createSagaMiddleware from 'redux-saga'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(watcherSaga);
    return store;
};

export default configureStore;