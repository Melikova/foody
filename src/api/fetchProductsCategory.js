import baseUrl from 'api/baseUrl';
import axios from 'axios';

const fetchProducsCategory = async () => {
    return await axios.get(`${baseUrl}/api/category`);
}

export default fetchProducsCategory