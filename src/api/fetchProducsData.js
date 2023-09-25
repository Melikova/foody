import baseUrl from 'api/baseUrl';
import axios from 'axios';

const fetchProductsData = async () => {
    return await axios.get(`${baseUrl}/api/products`);
}

export default fetchProductsData