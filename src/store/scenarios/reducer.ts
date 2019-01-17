import { Actions, ActionTypes } from './actions';

import { IScenarioStore } from '../../interfaces';

export function scenarioReducer(state: IScenarioStore = {}, action: Actions): IScenarioStore {
    let isLoading: boolean;
    let isLoadingError: boolean;
    let isAddingScenarioRequest: boolean;
    let isAddingScenarioError: boolean;

    switch (action.type) {
        case ActionTypes.ADD_SCENARIO:
            isAddingScenarioRequest = true;
            return {...state, isAddingScenarioRequest};
        case ActionTypes.ADD_SCENARIO_SUCCESS:
            isAddingScenarioRequest = false;
            isAddingScenarioError = false;
            return {...state, isAddingScenarioError, isAddingScenarioRequest};
        case ActionTypes.ADD_SCENARIO_FAILURE:
            isAddingScenarioRequest = false;
            isAddingScenarioError = true;
            return {...state, isAddingScenarioError, isAddingScenarioRequest};

        case ActionTypes.FETCH_ALL_SCENARIO_FAILURE:
            isLoading = false;
            isLoadingError = true;
            return {...state, isLoading, isLoadingError};
        case ActionTypes.FETCH_ALL_SCENARIO_REQUEST:
            isLoading = true;
            return {...state, isLoading};
        case ActionTypes.FETCH_ALL_SCENARIO_SUCCESS:
            isLoading = false;
            isLoadingError = false;
            return {...state, isLoading, isLoadingError};

        default:
            return {...state, };
    }
}