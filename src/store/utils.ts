import { IStore } from '../interfaces';

export type StateSelector<T> = (state: IStore) => T


export interface IAction<T extends string> {
    type: T;
}

export interface IActionWithPayload<T extends string, P> extends IAction<T>{
    payload?: P;
}

export function createAction<T extends string>(type: T): IAction<T>
export function createAction<T extends string, P>(type: T, payload: P): IActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P): IActionWithPayload<T, P> {
    return payload === undefined ? { type } : { type, payload};
}
