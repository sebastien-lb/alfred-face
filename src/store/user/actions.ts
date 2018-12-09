import { ActionCreatorsMapObject } from 'redux';
import { IUser } from '../../interfaces';
import { createAction } from '../utils';

// Actions type
export enum ActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    LOG_OUT = 'LOG_OUT',
    REGISTER_REQUEST = 'REGISTER_REQUEST',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAILURE = 'REGISTER_FAILURE',

    REGISTER_REMOVE_SUCCESS_ALERT = 'REGISTER_REMOVE_SUCCESS_ALERT',
}

export interface ILoginRequestPayload {
    login: string;
    password: string;
}

export interface ILoginSuccessPayload {
    user: IUser;
}

export interface IRegisterRequestPayload {
    login: string;
    password: string;
}

export const USER_ACTIONS = {
    logOut: () => createAction(ActionTypes.LOG_OUT),
    loginFailure: () => createAction(ActionTypes.LOGIN_FAILURE),
    loginRequest: (payload: ILoginRequestPayload ) => createAction(ActionTypes.LOGIN_REQUEST, payload),
    loginSuccess: (payload: ILoginSuccessPayload) => createAction(ActionTypes.LOGIN_SUCCESS, payload),
    registerFailure: () => createAction(ActionTypes.REGISTER_FAILURE),
    registerRequest: (payload: IRegisterRequestPayload) => createAction(ActionTypes.REGISTER_REQUEST, payload),
    registerSuccess: () => createAction(ActionTypes.REGISTER_SUCCESS),

    registerRemoveSuccessAlert: () => createAction(ActionTypes.REGISTER_REMOVE_SUCCESS_ALERT),
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof USER_ACTIONS>;
