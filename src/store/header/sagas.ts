import { put, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from './actions';

import { push } from 'connected-react-router';

export function* goToDashboard(): Iterator<any> {
    yield put(push("/home"));
}

export function* goToScenarios(): Iterator<any> {
    yield put(push("/scenarios"));
}

export function* headerSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.PUSH_DASHBOARD, goToDashboard);
    yield takeEvery(ActionTypes.PUSH_SCENARIOS, goToScenarios);
}