import axios from 'axios';
import { BACK_URL } from '../../const';

const getObjects = async () => {
    const url = BACK_URL + '/objects';
    const rep = await axios.get(url);
    console.log("api object rep", rep);
    return rep;
}

export const API = {
    getObjects
}