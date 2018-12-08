import { ISmartObjectStore } from './smart-objects-state';
import { IUserState } from './user-state';

export interface IStore {
    smartObjectReducer: ISmartObjectStore;
    userReducer: IUserState;
}
