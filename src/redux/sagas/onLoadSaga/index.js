import {call, put, takeLatest} from "redux-saga/effects";

export function* fetchData() {
    const response = yield call(fetch,'https://swapi.dev/api/people');
    const data = yield call([response, response.json]);
    return data;
}

export function* setData() {
    const data = yield call(fetchData);
    yield put({type: 'SET_USERS', payload: data.results});
    console.log('ON LOAD USERS PAGE EVENT DATA: ', data.results);
}

export function* onLoadSaga() {
    yield takeLatest('LOAD_USERS_DATA', setData);
}