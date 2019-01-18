import { DataType } from './types';

export interface IOperator {
    id: string;
    name: string;
    allowedTypes: DataType[];
}