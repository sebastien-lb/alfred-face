import { Actions, ActionTypes } from './actions';

import { ISmartObjectStore } from '../../interfaces';

export function smartObjectReducer(state: ISmartObjectStore = {}, action: Actions): ISmartObjectStore {
    let isAddingSmartObjectRequest: boolean;
    let isAddingSmartObjectError: boolean;
    let isAddingSmartObjectSuccess: boolean;

    switch (action.type) {
        // SERIES fetch
        case ActionTypes.FETCH_ALL_SMART_OBJECTS_REQUEST:
            return { ...state, };
        case ActionTypes.FETCH_ALL_SMART_OBJECTS_SUCCESS:
            return { ...state, smartObjects: action.payload ? action.payload.smartObjects : [] };
        case ActionTypes.FETCH_ALL_SMART_OBJECTS_FAILURE:
            return { ...state, };

        // Add Smart Object
        case ActionTypes.ADD_REQUEST:
            isAddingSmartObjectRequest = true;
            isAddingSmartObjectError = false;
            isAddingSmartObjectSuccess = false;
            return { ...state, isAddingSmartObjectRequest, isAddingSmartObjectError, isAddingSmartObjectSuccess };
        case ActionTypes.ADD_SUCCESS:
            isAddingSmartObjectRequest = false;
            isAddingSmartObjectError = false;
            isAddingSmartObjectSuccess = true;
            return { ...state, isAddingSmartObjectRequest, isAddingSmartObjectError, isAddingSmartObjectSuccess };
        case ActionTypes.ADD_FAILURE:
            isAddingSmartObjectRequest = false;
            isAddingSmartObjectError = true;
            isAddingSmartObjectSuccess = false;
            return { ...state, isAddingSmartObjectError, isAddingSmartObjectRequest, isAddingSmartObjectSuccess };

        default:
            return state;
    }
}
