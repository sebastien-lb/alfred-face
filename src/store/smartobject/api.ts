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

export const Api = {
    addSmartObjectRequest,
    fetchAllSmartObjectsRequest
};
