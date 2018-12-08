import { IObjectStore } from './object-store.interface';
import { IUserState } from './user-state';

export interface IStore {
    objectReducer: IObjectStore;
    userReducer: IUserState;
}
