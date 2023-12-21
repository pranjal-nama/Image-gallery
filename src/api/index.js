import axios from 'axios';

const API_KEY = 'EE060O2EnYivjuEavKp875TFLJpSynuS66Z9wyG-66U';
const BASE_URL = 'https://api.unsplash.com';

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos?query=${query}&client_id=${API_KEY}&per_page=30`
    )
    return response.data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images');
  }
};