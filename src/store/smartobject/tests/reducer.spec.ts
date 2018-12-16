import { ActionTypes } from '../actions';

import { smartObjectReducer } from "../reducer";

import { ISmartObject, ISmartObjectStore } from '../../../interfaces';



describe("SmartObject Reducer", () => {

    const initialState: ISmartObjectStore = {};

    it('Should handle FETCH_ALL_SMART_OBJECTS_REQUEST', () => {

        expect(
            smartObjectReducer(initialState, {
              type: ActionTypes.FETCH_ALL_SMART_OBJECTS_REQUEST
            })
        ).toEqual({isLoadingError: false});
    });

    it('Should handle FETCH_ALL_SMART_OBJECTS_FAILURE', () => {

        expect(
            smartObjectReducer(initialState, {
              type: ActionTypes.FETCH_ALL_SMART_OBJECTS_FAILURE
            })
        ).toEqual({isLoadingError: true});
    });

    it('Should handle FETCH_ALL_SMART_OBJECTS_SUCCESS', () => {
        const smartObjects: ISmartObject[] = [
            {ip: '127.0.0.1', port: 5000},
            {ip: '127.0.0.8', port: 5007},
        ]
        expect(
            smartObjectReducer(initialState, {
              payload: {smartObjects },
              type: ActionTypes.FETCH_ALL_SMART_OBJECTS_SUCCESS
            })
        ).toEqual({
            isLoadingError: false,
            smartObjects
        });
    });

    it('Should handle ADD_REQUEST', () => {

        expect(
            smartObjectReducer(initialState, {
              type: ActionTypes.ADD_REQUEST
            })
        ).toEqual({
            isAddingSmartObjectError: false,
            isAddingSmartObjectRequest: true,
            isAddingSmartObjectSuccess: false
        });
    });

    it('Should handle ADD_SUCCESS', () => {

        expect(
            smartObjectReducer(initialState, {
              type: ActionTypes.ADD_SUCCESS
            })
        ).toEqual({
            isAddingSmartObjectError: false,
            isAddingSmartObjectRequest: false,
            isAddingSmartObjectSuccess: true
        });
    });

    it('Should handle ADD_FAILURE', () => {

        expect(
            smartObjectReducer(initialState, {
              type: ActionTypes.ADD_FAILURE
            })
        ).toEqual({
            isAddingSmartObjectError: true,
            isAddingSmartObjectRequest: false,
            isAddingSmartObjectSuccess: false
        });
    });

})