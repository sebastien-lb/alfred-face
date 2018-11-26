import { ActionCreatorsMapObject } from 'redux';
import { createAction } from '../utils';


export enum ActionTypes {
    GET_CONNECTED_OBJECTS_FAILURE = 'GET_CONNECTED_OBJECTS_FAILURE',
    GET_CONNECTED_OBJECTS_SUCCESS = 'GET_CONNECTED_OBJECTS_SUCCESS',
    GET_CONNECTED_OBJECTS_REQUEST = 'GET_CONNECTED_OBJECTS_REQUEST'

}

export const COMMANDS_ACTIONS = {

    getConnectedObjectsFailure: () => createAction(ActionTypes.GET_CONNECTED_OBJECTS_FAILURE),
    getConnectedObjectsSuccess: (payload: IGetConnectedObjectsSuccess) => createAction(ActionTypes.GET_CONNECTED_OBJECTS_SUCCESS, payload),
    getConnectedObjectsRequest: (payload: IGetConnectedOjectsRequest) => createAction(ActionTypes.GET_CONNECTED_OBJECTS_REQUEST, payload)
}

export interface IGetConnectedObjectsSuccess {

}

export interface IGetConnectedOjectsRequest {

}