import axios from 'axios';
import i18n from '../config/i18n.js';

export const getData = async (animalName) => {
  const language = (i18n.language || 'en').slice(0, 2);
  const wikiBase = `https://${language}.wikipedia.org`;
  const title = (animalName || '').trim().replace(/ /g, '_');
  const url = `${wikiBase}/api/rest_v1/page/summary/${encodeURIComponent(title)}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null;
    }
    console.error('Wikipedia API error:', error);
    throw error;
  }
};
