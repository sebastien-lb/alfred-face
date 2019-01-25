import { call, put, takeEvery } from 'redux-saga/effects';

import { IScenario } from '../../interfaces'

import { ActionTypes, SCENARIO_ACTIONS } from './actions';
import { Api } from './api';

import { IDataSource, IObjectAction, IScenarioCondition } from '../../interfaces';

export function* fetchAllScenarioRequest(params:any): Iterator<any> {
    try {
        const token = params.payload.token;
        const rep = yield call(Api.fetchAllScenariosRequest, token);
        let data = rep.data;
        data = data.map((item: any): IScenario => {
            const objectActions: {[SmartObjectId: string]: IObjectAction[]} = {};
            item.actions.map((action: any) => {
                const objectAction: IObjectAction = {
                    id: action.id,
                    name: action.name,
                    command: action.command,
                    payload: action.datatype,
                    important: action.important
                }
                let tempActions: IObjectAction[];
                if (objectActions[action.SmartObjectId]){
                    tempActions = objectActions[action.SmartObjectId];
                    tempActions = [...tempActions, objectAction];
                }
                tempActions = [objectAction];
                objectActions[action.SmartObjectId] = tempActions;
            })
            return {
                id: item.id,
                name: item.name,
                conditions: item.conditions.map((condition:any): IScenarioCondition =>{
                    const dataSource: IDataSource = 
                    {
                        id: condition.data_source.id,
                        name: condition.data_source.name,
                        description: condition.data_source.description,
                        data_polling_type: condition.data_source.data_polling_type,
                        data_type: condition.data_source.data_type
                    };
                    const id: string = condition.id;
                    const operator: string = condition.operator.name;
                    const value: any = condition.value;
                    return {id, operator, value, dataSource };
                }),
                objectActions,
            };
        });
        console.log(data);
        yield put(SCENARIO_ACTIONS.fetchAllScenarioSuccess({scenarios: data}));
    }
    catch (error) {
        console.log("load scenarios", error);
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
