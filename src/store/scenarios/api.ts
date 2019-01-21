import axios from 'axios';
import { BACK_URL } from '../../const/api.const';

const addScenarioRequest = async (name: string, conditions: any, actions: any , token: string) => {
    const url = BACK_URL + '/registerScenario';
    const rep = await axios.post(url, {name, conditions, actions}, {
        headers: {
            'Authorization': 'Token ' + token
        }
    });
    return rep
}

const fetchAllScenariosRequest = async (token: string) => {
    const url = BACK_URL + '/scenarios/?format=json';
    const rep = await axios.get(url, {
        headers: {
            'Authorization': 'Token ' + token
        }
    });
    return rep;
}

const fetchAllOperators = async (token: string) => {
    
    const url = BACK_URL + '/operator/?format=json';
    const rep = await axios.get(url, {
        headers: {
            'Authorization': 'Token ' + token
        }
    });
    
    return rep;
}

export const Api = {
    addScenarioRequest,
    fetchAllOperators,
    fetchAllScenariosRequest,
};