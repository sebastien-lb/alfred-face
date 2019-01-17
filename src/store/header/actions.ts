import { ActionCreatorsMapObject } from 'redux';
import { createAction } from '../utils';


export enum ActionTypes {
    PUSH_DASHBOARD = 'PUSH_DASHBOARD',
    PUSH_SCENARIOS = 'PUSH_SCENARIOS',
}


export const HEADER_ACTIONS = {
    pushDashboard: () => createAction(ActionTypes.PUSH_DASHBOARD),
    pushScenarios: () => createAction(ActionTypes.PUSH_SCENARIOS),
}


export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A [keyof A]>;
export type Actions = ActionsUnion<typeof HEADER_ACTIONS>;