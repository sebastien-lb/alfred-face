import { ISmartObjectStore } from '../../interfaces';


export const getNotifMessage = (state: ISmartObjectStore) => {
    if (state.isAddingSmartObjectError) {
        return "Error while adding object";
    } else if (state.isLoadingError) {
        return "Error while loading objects";
    }
    return undefined;
}