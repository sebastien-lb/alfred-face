import { call, put, takeEvery } from 'redux-saga/effects';

import { ActionTypes, SMART_OBJECT_ACTIONS } from './actions';
import { Api } from './api';

export function* addSmartObjectRequest(params: any): Iterator<any> {
    try {
        yield call(Api.addSmartObjectRequest, params.payload.name, params.payload.ip, params.payload.port);
        yield put(SMART_OBJECT_ACTIONS.addSmartObjectSuccess());
    } catch (error) {
        yield put(SMART_OBJECT_ACTIONS.addSmartObjectFailure());
    }
}

export function* smartObjectSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.ADD_REQUEST, addSmartObjectRequest);
}
