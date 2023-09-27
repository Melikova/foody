import baseUrl from 'api/baseUrl';
import axios from 'axios';

const fetchFilteredProducts = async (id) => {
    return await axios.get(`${baseUrl}/api/products/${id}`, {
        headers: 'accept: application/json',
    });
}

export default fetchFilteredProducts