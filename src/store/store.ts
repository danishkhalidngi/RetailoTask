import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import {allReducers} from './reducers';
import {persistStore} from 'redux-persist';
import rootSaga from './middlewares';

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(allReducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
let persistor = persistStore(store);
export {store, persistor};
