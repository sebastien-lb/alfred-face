import { IObjectAction } from "./object-action";
import { IDataSource } from "./object-data-source";

export interface ISmartObject {
    id?: string;
    name?: string;
    ip: string;
    port: number;
    actions?: IObjectAction[];
    dataSources?: IDataSource[];
}
