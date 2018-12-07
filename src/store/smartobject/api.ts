import axios from 'axios';
import { BACK_URL } from '../../const/api.const';

const addSmartObjectRequest = async (name: string, ip: string, port: string) => {

    const url = BACK_URL + '/registerDevice';
    const rep = await axios.post(url, { name, address_ip: ip, port}, {
        headers: {
            'Authorization': 'Token xxx'
        }
    });
    return rep;
}

export const Api = {
    addSmartObjectRequest
};
