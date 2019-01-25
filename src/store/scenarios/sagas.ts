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

        const actionIds = params.payload.actions.map((item: any): any => ({
            action_id: item.action.id,
            payload: item.payload ? item.payload : ''
        }));

        const conditions = params.payload.conditions.map((item: any): any => ({
            operator_id: item.operatorId,
            data_source_id: item.datasource.id,
            value: item.value
        }));

        console.log(conditions);

        yield call(Api.addScenarioRequest, params.payload.name, conditions, actionIds, params.payload.token);
        yield put(SCENARIO_ACTIONS.addScenarioSuccess())
    } catch (error) {
        yield put(SCENARIO_ACTIONS.addScenarioFailure());
    }
}

export function* fetchAllOperator(params: any): Iterator<any> {
    try {
        const rep = yield call(Api.fetchAllOperators, params.payload.token);
        const data = rep.data.map((operator: any) => ({...operator, allowedTypes: operator.allowed_types}));
        yield put(SCENARIO_ACTIONS.fetchAllOperatorsSuccess({operators: data}));
    } catch (error) {
        yield put(SCENARIO_ACTIONS.fetchAllOperatorsFailure());
    }
}

export function* scenarioSaga(): Iterator<any> {
    yield takeEvery(ActionTypes.ADD_SCENARIO, addScenarioRequest);
    yield takeEvery(ActionTypes.FETCH_ALL_SCENARIO_REQUEST, fetchAllScenarioRequest);
    yield takeEvery(ActionTypes.FETCH_ALL_OPERATORS_REQUEST, fetchAllOperator);
}
