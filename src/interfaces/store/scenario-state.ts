import { IOperator } from '../condition-operator';
import { IScenario } from '../scenario';

export interface IScenarioStore {
    scenarios?: IScenario[];
    operators?: IOperator[];
    isLoading?: boolean;
    isLoadingError?: boolean;
    isAddingScenarioRequest?: boolean;
    isAddingScenarioError?: boolean;
}