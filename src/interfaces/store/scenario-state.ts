import { IScenario } from '../scenario';

export interface IScenarioStore {
    scenarios?: IScenario[];
    isLoading?: boolean;
    isLoadingError?: boolean;
    isAddingScenarioRequest?: boolean;
    isAddingScenarioError?: boolean;
}