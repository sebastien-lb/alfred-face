import { put, takeEvery } from 'redux-saga/effects'; // call

import { ActionTypes, COMMANDS_ACTIONS } from './actions';

// import { API } from './api';

export function* processGetObjectsRequest(params: any): Iterator<any> {
    try {
        // const rep = yield call(API.getObjects, params.payload);
        // const data = rep.data;
        yield put(COMMANDS_ACTIONS.getConnectedObjectsSuccess({}));
    } catch (error){
        put(COMMANDS_ACTIONS.getConnectedObjectsFailure());
    }
}

export function* objectSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.GET_CONNECTED_OBJECTS_REQUEST, processGetObjectsRequest);
}