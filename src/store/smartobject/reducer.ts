import { Actions, ActionTypes } from './actions';

import { IObjectStore } from '../../interfaces';

export function smartObjectReducer(state: IObjectStore = {}, action: Actions): IObjectStore {
    let isAddingSmartObjectRequest: boolean;
    let isAddingSmartObjectError: boolean;
    let isAddingSmartObjectSuccess: boolean;

    switch (action.type) {
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
