import axios from 'axios';
import env from 'react-dotenv';

axios.defaults.baseURL = env.API_URL||'https://rstestbe.herokuapp.com';
axios.defaults.headers.get['Accept'] = 'application/json';

const fetchApi = {
  post: async (url: string, reqBody: any) => {
    try {
      const { data } = await axios.post(url, reqBody);
      return data;
    } catch (error) {
      throw error;
    }
  },

  get: async (url: string) => {
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default fetchApi;
