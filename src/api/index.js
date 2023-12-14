import axios from 'axios';

const API_KEY = 'EE060O2EnYivjuEavKp875TFLJpSynuS66Z9wyG-66U';
const BASE_URL = 'https://api.unsplash.com';

const unsplashAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const fetchImages = async (query) => {
  try {
    const response = await unsplashAPI.get('/photos', {
      params: { query, per_page: 10 },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images');
  }
};

export default unsplashAPI;
