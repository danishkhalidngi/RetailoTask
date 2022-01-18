import {all} from 'redux-saga/effects';
import giphsMiddleware from './giphsMiddleware';

export default function* rootSagas() {
  yield all([giphsMiddleware()]);
}
