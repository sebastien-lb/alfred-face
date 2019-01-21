import { IObjectAction } from './object-action';
import { IScenarioCondition } from './scenario-condition';

interface DictItem<K,V> {
        0: K,
        1: V,
}

export interface IScenario {
    id: string;
    name: string;
    objectActions?: DictItem<string, IObjectAction[]>[];
    conditions?: IScenarioCondition[];
}