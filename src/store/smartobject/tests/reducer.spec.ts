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
        ).toEqual({});
    })

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
            smartObjects
        });
    })
})