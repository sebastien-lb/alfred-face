import { Actions, ActionTypes } from './actions';

import { ISmartObject, ISmartObjectStore } from '../../interfaces';

export function smartObjectReducer(state: ISmartObjectStore = {}, action: Actions): ISmartObjectStore {
    let isAddingSmartObjectRequest: boolean;
    let isAddingSmartObjectError: boolean;
    let isAddingSmartObjectSuccess: boolean;
    
    let isLoadingError: boolean;

    switch (action.type) {
        // Smart Object fetch
        case ActionTypes.FETCH_ALL_SMART_OBJECTS_REQUEST:
            isLoadingError = false;
            return { ...state, isLoadingError};
        case ActionTypes.FETCH_ALL_SMART_OBJECTS_SUCCESS:
            isLoadingError = false;
            return { ...state, smartObjects: action.payload ? action.payload.smartObjects : [], isLoadingError };
        case ActionTypes.FETCH_ALL_SMART_OBJECTS_FAILURE:
            isLoadingError = true;
            return { ...state, isLoadingError};

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

        // ACTION PERFORMED
        case ActionTypes.PERFORM_ACTION_REQUEST:
            return { ...state, };
        case ActionTypes.PERFORM_ACTION_SUCCESS:
            return { ...state, };
        case ActionTypes.PERFORM_ACTION_FAILURE:
            return { ...state, };

        // SmartObject State retreive
        case ActionTypes.FETCH_SMART_OBJECT_STATE_REQUEST:
            return {...state, };
        case ActionTypes.FETCH_SMART_OBJECT_STATE_SUCCESS:
            const smartObjectId: string = action.payload!.smartObjectId;
            const data = action.payload!.data;
            const smartObjects: ISmartObject[] = (state.smartObjects || []).map((object: ISmartObject) => {
                if (object.id === smartObjectId) {
                    const dataSources = (object.dataSources || []).map((source) => {
                            return {...source, latest_value: data[source.id].value};
                    });
                    return {...object, dataSources};
                }
                return object;
            });

            return {...state, smartObjects};
        case ActionTypes.FETCH_SMART_OBJECT_STATE_FAILURE:
            return {...state, };


        default:
            return {...state, };
    }
}
