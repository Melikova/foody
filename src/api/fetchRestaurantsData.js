import baseUrl from 'api/baseUrl';
import axios from 'axios';

const fetchRestaurantsData = async () => {
    return await axios.get(`${baseUrl}/api/restuarants`);
}

export default fetchRestaurantsData