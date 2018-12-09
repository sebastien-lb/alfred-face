import { call, put, takeEvery } from 'redux-saga/effects';

import { ISmartObject } from '../../interfaces';
import { ActionTypes, SMART_OBJECT_ACTIONS } from './actions';
import { Api } from './api';

export function* fetchAllSmartObjectsRequest(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.fetchAllSmartObjectsRequest, params.payload.token);
        let data = rep.data;

        // // add missing value from api
        data = data.map((item: any): ISmartObject => ({
            actions: item.actions,
            id: item.id,
            ip: item.address_ip,
            name: item.name,
            port: item.port
        }));
        yield put(SMART_OBJECT_ACTIONS.fetchAllSmartObjectsSuccess({ smartObjects: data }));
    } catch (error) {
        yield put(SMART_OBJECT_ACTIONS.fetchAllSmartObjectsFailure());
    }
}

export function* addSmartObjectRequest(params: any): Iterator<any> {
    try {
        yield call(Api.addSmartObjectRequest, params.payload.name, params.payload.ip, params.payload.port, params.payload.token);
        yield put(SMART_OBJECT_ACTIONS.addSmartObjectSuccess());
    } catch (error) {
        yield put(SMART_OBJECT_ACTIONS.addSmartObjectFailure());
    }
}

export function* smartObjectSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.FETCH_ALL_SMART_OBJECTS_REQUEST, fetchAllSmartObjectsRequest);
    yield takeEvery(ActionTypes.ADD_REQUEST, addSmartObjectRequest);
}
