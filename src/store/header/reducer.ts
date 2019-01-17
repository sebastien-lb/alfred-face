import { Actions, ActionTypes } from './actions';

import { IStore } from '../../interfaces';

export function headerReducer(state: IStore, action: Actions): IStore{
    switch(action.type) {
        case ActionTypes.PUSH_DASHBOARD:
            return {...state};
        case ActionTypes.PUSH_SCENARIOS:
            return {...state};
        default:
            return {...state};
    }
}