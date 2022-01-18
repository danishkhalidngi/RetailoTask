import {call, put, takeLatest} from 'redux-saga/effects';
import * as c from '../constants';
import {giphs} from '../../api/giphsApi';
import * as a from '../actions';

function* giphsMiddleware({payload}: any): any {
  try {
    const response = yield call(giphs.searchGiphs, payload);
    yield put(a.giphsSuccess({response, reqData: payload}));
  } catch (err) {
    console.log(err);
    yield put(a.giphsFail('Something went wrong'));
  }
}

export default function* defaulSaga() {
  yield takeLatest(c.GIPHS, giphsMiddleware);
}
