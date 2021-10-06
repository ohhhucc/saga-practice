import {fork, call, all, delay} from 'redux-saga/effects';

function* auth() {
    yield delay(2000);
    console.log('SUCCESS AUTH')
    return true;
}

function* loadInitialUsers() {
    const request = yield call(fetch,'https://swapi.dev/api/people');
    const data = yield call([request, request.json]);
    console.log('LOAD INITIAL DATA')
}

export function* initialSaga() {
    yield all([
        fork(auth),
        fork(loadInitialUsers)
    ])
}