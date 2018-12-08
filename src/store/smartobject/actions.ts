import { ActionCreatorsMapObject } from 'redux';
import { ISmartObject } from '../../interfaces';
import { createAction } from '../utils';

// Actions type
export enum ActionTypes {
    ADD_REQUEST = 'ADD_REQUEST',
    ADD_SUCCESS = 'ADD_SUCCESS',
    ADD_FAILURE = 'ADD_FAILURE',
}

export interface IAddSmartObjectRequestPayload {
    name: string;
    ip: string;
    port: string;
    token: string;
}

export interface IAddSmartObjectSuccessPayload {
    user: ISmartObject;
}

export const SMART_OBJECT_ACTIONS = {
    addSmartObjectFailure: () => createAction(ActionTypes.ADD_FAILURE),
    addSmartObjectRequest: (payload: IAddSmartObjectRequestPayload) => createAction(ActionTypes.ADD_REQUEST, payload),
    addSmartObjectSuccess: () => createAction(ActionTypes.ADD_SUCCESS),
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof SMART_OBJECT_ACTIONS>;
