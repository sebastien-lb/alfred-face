import { IObjectAction } from "./object-action";

export interface ISmartObject {
    id?: string;
    name?: string;
    ip: string;
    port: number;
    actions?: IObjectAction[]; 
}
