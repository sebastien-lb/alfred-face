import { ActionCreatorsMapObject } from 'redux';
import { createAction } from '../utils';


export enum ActionTypes {
    GET_CONNECTED_OBJECTS_FAILURE = 'GET_CONNECTED_OBJECTS_FAILURE',
    GET_CONNECTED_OBJECTS_SUCCESS = 'GET_CONNECTED_OBJECTS_SUCCESS',
    GET_CONNECTED_OBJECTS_REQUEST = 'GET_CONNECTED_OBJECTS_REQUEST'

}

export const COMMANDS_ACTIONS = {

    getConnectedObjectsFailure: () => createAction(ActionTypes.GET_CONNECTED_OBJECTS_FAILURE),
    getConnectedObjectsRequest: (payload: IGetConnectedOjectsRequest) => createAction(ActionTypes.GET_CONNECTED_OBJECTS_REQUEST, payload),
    getConnectedObjectsSuccess: (payload: IGetConnectedObjectsSuccess) => createAction(ActionTypes.GET_CONNECTED_OBJECTS_SUCCESS, payload)
}

export interface IGetConnectedObjectsSuccess {
    isSuccess?: boolean
}

export interface IGetConnectedOjectsRequest {
    isSuccess?: boolean
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type Actions = ActionsUnion<typeof COMMANDS_ACTIONS>;