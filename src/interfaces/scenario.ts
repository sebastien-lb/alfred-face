import { IObjectAction } from './object-action';

export interface IScenario {
    id?: string;
    name: string;
    objectActions?: {[SmartObjectId: string]: IObjectAction[]};
    conditions?: any;
}
