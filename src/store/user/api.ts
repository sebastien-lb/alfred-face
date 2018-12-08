import axios from 'axios';
import { BACK_URL } from '../../const/api.const';

const loginRequest = async (login: string, password: string) => {

    const url = BACK_URL + '/api/login';
    const rep = await axios.post(url, {username: login, password});
    return rep;
}

const registerRequest = async (login: string, password: string) => {

    const url = BACK_URL + '/register';
    const rep = await axios.post(url, {login, password});
    return rep;
}


export const Api = {
    loginRequest,
    registerRequest
};
