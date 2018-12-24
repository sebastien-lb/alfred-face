import axios from 'axios';
import { BACK_URL } from '../../const/api.const';

const fetchAllSmartObjectsRequest = async (token: string) => {

    const url = BACK_URL + '/smartObject/?format=json';
    const rep = await axios.get(url, {
        headers: {
            'Authorization': 'Token ' + token
        }
    });
    return rep;
}

const addSmartObjectRequest = async (name: string, ip: string, port: string, token: string) => {

    const url = BACK_URL + '/registerDevice';
    const rep = await axios.post(url, { name, address_ip: ip, port}, {
        headers: {
            'Authorization': 'Token ' + token
        }
    });
    return rep;
}

const performActionRequest = async (actionId: string, token: string) => {

    const url = BACK_URL + '/performAction';
    const rep = await axios.post(url, { action_id: actionId}, {
        headers: {
            'Authorization': 'Token ' + token
        }
    });
    return rep;
}

const retreiveSmartObjectState = async (smartObjectId: string, token: string) => {

    const url = BACK_URL + '/objectState';
    const rep = await axios.get(url, {
        headers: {
            'Authorization': 'Token ' + token
        },
        params: {smart_object_id: smartObjectId}, 
    });
    return rep;
}

export const Api = {
    addSmartObjectRequest,
    fetchAllSmartObjectsRequest,
    performActionRequest,
    retreiveSmartObjectState
};
