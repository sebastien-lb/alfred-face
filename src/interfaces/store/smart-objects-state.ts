import { ISmartObject } from '../smartobject';

export interface ISmartObjectStore {
    smartObjects?: ISmartObject[];
    isLoading?: boolean;
    isLoadingError?: boolean;
    isAddingSmartObjectRequest?: boolean;
    isAddingSmartObjectError?: boolean;
    isAddingSmartObjectSuccess?: boolean;
}
