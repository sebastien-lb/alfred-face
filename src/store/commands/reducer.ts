import { Actions, ActionTypes } from './actions';

import { IObjectStore } from '../../interfaces';

export function objectReducer(state: IObjectStore = {}, action: Actions): IObjectStore {
    let isLoading: boolean;
    let isLoadingError: boolean;
    switch (action.type) {
        case ActionTypes.GET_CONNECTED_OBJECTS_REQUEST:
            isLoading = true;
            isLoadingError = false;
            return { ...state, isLoading, isLoadingError};
        case ActionTypes.GET_CONNECTED_OBJECTS_SUCCESS:
            isLoading = false;
            isLoadingError = false;
            return {...state, isLoading, isLoadingError};
        case ActionTypes.GET_CONNECTED_OBJECTS_FAILURE:
            isLoading = false;
            isLoadingError = true;
            return { ...state, isLoading, isLoadingError};
        default:
            return state;
    }
}

