import { IDataSource } from './object-data-source';

export interface IScenarioCondition {
    id: string;
    operator: string;
    value: any;
    dataSource?: IDataSource;
}