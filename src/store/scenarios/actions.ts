import { ActionCreatorsMapObject } from 'redux';
import { IScenario } from '../../interfaces';
import { createAction } from '../utils';

export enum ActionTypes {
    ADD_SCENARIO = 'ADD_SCENARIO',
    ADD_SCENARIO_SUCCESS = 'ADD_SCENARIO_SUCCESS',
    ADD_SCENARIO_FAILURE = 'ADD_SCENARIO_FAILURE',

    FETCH_ALL_SCENARIO_FAILURE = 'FETCH_ALL_SCENARIO_FAILURE',
    FETCH_ALL_SCENARIO_SUCCESS = 'FETCH_ALL_SCENARIO_SUCCESS',
    FETCH_ALL_SCENARIO_REQUEST = 'FETCH_ALL_SCENARIO_REQUEST',
}

export interface IAddScenarioPayload {
    scenario: IScenario;
}

export interface IFetchScenarioPayload {
    token: string;
}


export const SCENARIO_ACTIONS = {
    addScenarioFailure: () => createAction(ActionTypes.ADD_SCENARIO_FAILURE),
    addScenarioRequest: (payload: IAddScenarioPayload) => createAction(ActionTypes.ADD_SCENARIO, payload),
    addScenarioSuccess: () => createAction(ActionTypes.ADD_SCENARIO_SUCCESS),

    fetchAllScenarioFailure: () => createAction(ActionTypes.FETCH_ALL_SCENARIO_FAILURE),
    fetchAllScenarioRequest: (payload: IFetchScenarioPayload) => createAction(ActionTypes.FETCH_ALL_SCENARIO_REQUEST, payload),
    fetchAllScenarioSuccess: () => createAction(ActionTypes.FETCH_ALL_SCENARIO_SUCCESS),
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof SCENARIO_ACTIONS>;
