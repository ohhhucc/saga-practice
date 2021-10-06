import {call, put, take, cancel, fork} from "redux-saga/effects";

export function* fetchData(signal) {
    const response = yield call(fetch, `https://swapi.dev/api/planets`, {signal});
    const data = yield call([response, response.json]);
    return data;
}

export function* setData(signal) {
    const data = yield call(fetchData, signal);
    yield put({type: 'SET_PLANETS', payload: data.results});
    console.log('ON CLICK EVENT DATA: ', data.results);
}

export function* eventSaga() {
    let task;
    let abortController = new AbortController();
    while (true) {
        yield take('LOAD_PLANETS_DATA');
        if (task) {
            abortController.abort();
            yield cancel(task);
            abortController = new AbortController();
        }
        task = yield fork(setData, abortController.signal)
    }
}