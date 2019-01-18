import { call, put, takeEvery } from 'redux-saga/effects';

import { IScenario } from '../../interfaces'

import { ActionTypes, SCENARIO_ACTIONS } from './actions';
import { Api } from './api';

export function* fetchAllScenarioRequest(params:any): Iterator<any> {
    try {
        const token = params.payload.token;
        const rep = yield call(Api.fetchAllScenariosRequest, token);
        let data = rep.data;
        data = data.map((item: any): IScenario => ({
            id: item.id,
            name: item.name,
            objectActions: data.actions
        }));
        yield put(SCENARIO_ACTIONS.fetchAllScenarioSuccess());
    }
    catch (error) {
        yield put(SCENARIO_ACTIONS.fetchAllScenarioFailure());
    }
}

export function* addScenarioRequest(params: any): Iterator<any> {
    try {
        yield call(Api.addScenarioRequest, params.payload.name, params.payload.conditions, params.payload.actions, params.payload.token);
        yield put(SCENARIO_ACTIONS.addScenarioSuccess())
    } catch (error) {
        yield put(SCENARIO_ACTIONS.addScenarioFailure());
    }
}

export function* fetchAllOperator(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.fetchAllOperators, params.payload.token);
        yield put(SCENARIO_ACTIONS.fetchAllOperatorsSuccess({operators: rep.data}));
    } catch (error) {
        yield put(SCENARIO_ACTIONS.fetchAllOperatorsFailure());
    }
}

export function* scenarioSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.ADD_SCENARIO, addScenarioRequest);
    yield takeEvery(ActionTypes.FETCH_ALL_SCENARIO_REQUEST, fetchAllScenarioRequest);
    yield takeEvery(ActionTypes.FETCH_ALL_OPERATORS_REQUEST, fetchAllOperator);
}