import { call, put } from 'redux-saga/effects';
import { SMART_OBJECT_ACTIONS } from "../actions";
import { performActionRequest } from "../sagas";

import { Api } from "../api";

describe("SmartObject Sagas", () => {

    it("performActionRequest should work", () => {
        const params = {payload: {token: "lol", actionId: "actionId", payload: null}};
        const saga = performActionRequest(params);
        
        expect(saga.next().value).toEqual(
            call(Api.performActionRequest, params.payload.actionId, params.payload.payload, params.payload.token)
        );
        expect(saga.next().value).toEqual(
            put(SMART_OBJECT_ACTIONS.performActionSuccess())
        );
    })
});