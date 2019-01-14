import { ISmartObjectStore } from './smart-objects-state';
import { IUserState } from './user-state';

import { IScenarioStore } from './scenario-state';

export interface IStore {
    smartObjectReducer: ISmartObjectStore;
    userReducer: IUserState;
    scenarioReducer: IScenarioStore;
}
