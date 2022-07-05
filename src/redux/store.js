import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from './reducers/index'
import { addAlbumSaga, deleteAlbumSaga, getAlbumsSaga, updateAlbumSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    : applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, middleware)

sagaMiddleware.run(getAlbumsSaga)
sagaMiddleware.run(updateAlbumSaga)
sagaMiddleware.run(deleteAlbumSaga)
sagaMiddleware.run(addAlbumSaga)

export default store