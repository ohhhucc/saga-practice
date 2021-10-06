import {spawn, call, all,} from 'redux-saga/effects';
import {initialSaga} from "./initialSaga";
import {onLoadSaga} from "./onLoadSaga";
import {eventSaga} from "./eventSaga";

export default function* rootSaga() {
    const sagas = [
        initialSaga,
        onLoadSaga,
        eventSaga
    ];
    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while(true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.log(e);
                }
            }
        })
    })
    yield all(retrySagas);
}






// import {put, takeLatest, call, fork} from 'redux-saga/effects';
//
// async function fetchData(pattern) {
//     const response = await fetch(`https://swapi.dev/api/${pattern}`);
//     const data = await response.json();
//     return data;
// }
//
// export function* loadPeople() {
//     const people = yield call(fetchData, 'people');
//     yield put({type: 'SET_PEOPLE', payload: people.results});
// }
//
// export function* loadPlanets() {
//     const planets = yield call(fetchData, 'planets');
//     yield put({type: 'SET_PLANETS', payload: planets.results});
// }
//
// export function* workerSaga() {
//     yield fork(loadPeople);
//     yield fork(loadPlanets);
// }
//
// export function* watcherSaga() {
//     yield takeLatest('LOAD_DATA', workerSaga);
// }