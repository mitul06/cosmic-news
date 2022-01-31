import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { newsApiReducers } from "./reducers/newsApiReducers";
import createSagaMiddleware from "redux-saga";
import newsApiSaga from "./saga/newsApiSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    newsApiReducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(newsApiSaga)

export default store;