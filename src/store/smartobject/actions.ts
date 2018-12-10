import { ActionCreatorsMapObject } from 'redux';
import { ISmartObject } from '../../interfaces';
import { createAction } from '../utils';

// Actions type
export enum ActionTypes {
    ADD_REQUEST = 'ADD_REQUEST',
    ADD_SUCCESS = 'ADD_SUCCESS',
    ADD_FAILURE = 'ADD_FAILURE',

    FETCH_ALL_SMART_OBJECTS_FAILURE = 'FETCH_ALL_SMART_OBJECTS_FAILURE',
    FETCH_ALL_SMART_OBJECTS_SUCCESS = 'FETCH_ALL_SMART_OBJECTS_SUCCESS',
    FETCH_ALL_SMART_OBJECTS_REQUEST = 'FETCH_ALL_SMART_OBJECTS_REQUEST',

    PERFORM_ACTION_REQUEST = 'PERFORM_ACTION_REQUEST',
    PERFORM_ACTION_SUCCESS = 'PERFORM_ACTION_SUCCESS',
    PERFORM_ACTION_FAILURE = 'PERFORM_ACTION_FAILURE'
}

export interface IAddSmartObjectRequestPayload {
    name: string;
    ip: string;
    port: string;
    token: string;
}

export interface IAddSmartObjectSuccessPayload {
    smartObject: ISmartObject;
}

export interface IFetchAllSmartObjectsRequestPayload {
    token: string;
}
export interface IFetchAllSmartObjectsSuccess {
    smartObjects: ISmartObject[];
}

export interface IPerformActionRequestPayload {
    actionId: string;
    token: string;
}

export const SMART_OBJECT_ACTIONS = {
    fetchAllSmartObjectsFailure: () => createAction(ActionTypes.FETCH_ALL_SMART_OBJECTS_FAILURE),
    fetchAllSmartObjectsRequest: (payload: IFetchAllSmartObjectsRequestPayload) => createAction(ActionTypes.FETCH_ALL_SMART_OBJECTS_REQUEST, payload),
    fetchAllSmartObjectsSuccess: (payload: IFetchAllSmartObjectsSuccess) => createAction(ActionTypes.FETCH_ALL_SMART_OBJECTS_SUCCESS, payload),

    addSmartObjectFailure: () => createAction(ActionTypes.ADD_FAILURE),
    addSmartObjectRequest: (payload: IAddSmartObjectRequestPayload) => createAction(ActionTypes.ADD_REQUEST, payload),
    addSmartObjectSuccess: () => createAction(ActionTypes.ADD_SUCCESS),

    performActionFailure: () => createAction(ActionTypes.PERFORM_ACTION_FAILURE),
    performActionRequest: (payload: IPerformActionRequestPayload) => createAction(ActionTypes.PERFORM_ACTION_REQUEST, payload),
    performActionSuccess: () => createAction(ActionTypes.PERFORM_ACTION_SUCCESS)
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof SMART_OBJECT_ACTIONS>;
