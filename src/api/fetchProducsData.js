import baseUrl from 'api/baseUrl';
import axios from 'axios';

const fetchProductsData = async () => {
    return await axios.get(`${baseUrl}/api/products`, {
        headers: 'accept: application/json',
    });
}

export default fetchProductsData