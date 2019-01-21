import { DataType } from './types';

export interface IObjectAction {
    id: string;
    name: string;
    command: string;
    payload: DataType;
    important?: boolean;
}