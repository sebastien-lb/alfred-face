import { IObjectAction } from './object-action';
import { IScenarioCondition } from './scenario-condition';

export interface IScenario {
    id?: string;
    name: string;
    objectActions?: {[SmartObjectId: string]: IObjectAction[]};
    conditions?: IScenarioCondition[];
}
