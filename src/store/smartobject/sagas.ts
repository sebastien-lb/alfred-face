import {all, call, put, takeEvery} from 'redux-saga/effects';

import { ISmartObject } from '../../interfaces';
import { ActionTypes, SMART_OBJECT_ACTIONS } from './actions';
import { Api } from './api';

export function* fetchAllSmartObjectsRequest(params: any): Iterator<any> {
    try {
        const token = params.payload.token
        const rep = yield call(Api.fetchAllSmartObjectsRequest, token);
        let data = rep.data;
        // // add missing value from api
        data = data.map((item: any): ISmartObject => ({
            actions: item.actions,
            dataSources: item.data_sources,
            id: item.id,
            ip: item.address_ip,
            name: item.name,
            port: item.port
        }));
        yield put(SMART_OBJECT_ACTIONS.fetchAllSmartObjectsSuccess({ smartObjects: data }));

        if (data.length) {
            yield all(data.map((smartObject: ISmartObject) => {
                if (smartObject.id) {
                    return put(SMART_OBJECT_ACTIONS.fetchSmartObjectsStateRequest({smartObjectId: smartObject.id, token}));
                }
                return null;
            }));
            yield all(data.map((smartObject: ISmartObject) => {
                if (smartObject.id) {
                    return put(SMART_OBJECT_ACTIONS.fetchSmartObjectsHistoryRequest({smartObjectId:  smartObject.id, token}));
                }
                return null;
            }));
        }
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

export function* performActionRequest(params: any): Iterator<any> {
    try {
        const smartObjectId = params.payload.smartObjectId;
        const token = params.payload.token;
        yield call(Api.performActionRequest, params.payload.actionId, params.payload.payload, token);
        yield put(SMART_OBJECT_ACTIONS.performActionSuccess());
        if (smartObjectId) {
            yield put(SMART_OBJECT_ACTIONS.fetchSmartObjectsStateRequest({smartObjectId, token}));
        }
    } catch (error) {
        yield put(SMART_OBJECT_ACTIONS.performActionFailure());
    }
}

export function* retreiveSmartObjectState(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.retreiveSmartObjectState, params.payload.smartObjectId, params.payload.token);
        const data = rep.data;
        yield put(SMART_OBJECT_ACTIONS.fetchSmartObjectsStateSuccess({smartObjectId: params.payload.smartObjectId, data}));
    } catch (error) {
        yield put(SMART_OBJECT_ACTIONS.fetchSmartObjectsStateFailure());
    }
}

export function* retreiveSmartObjectHistory(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.retreiveSmartObjectHistory, params.payload.smartObjectId, params.payload.token);
        const data = rep.data;
        yield put(SMART_OBJECT_ACTIONS.fetchSmartObjectsHistorySuccess({smartObjectId: params.payload.smartObjectId, history: data}));
    } catch (error) {
        yield put(SMART_OBJECT_ACTIONS.fetchSmartObjectsHistoryFailure());
    }
}


export function* smartObjectSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.FETCH_ALL_SMART_OBJECTS_REQUEST, fetchAllSmartObjectsRequest);
    yield takeEvery(ActionTypes.ADD_REQUEST, addSmartObjectRequest);
    yield takeEvery(ActionTypes.PERFORM_ACTION_REQUEST, performActionRequest);
    yield takeEvery(ActionTypes.FETCH_SMART_OBJECT_STATE_REQUEST, retreiveSmartObjectState);
    yield takeEvery(ActionTypes.FETCH_SMART_OBJECT_HISTORY_REQUEST, retreiveSmartObjectHistory);
}
