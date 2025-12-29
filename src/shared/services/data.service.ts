import axios from 'axios';
import i18n from '../config/i18n.js';

interface WikipediaData {
  title: string;
  extract: string;
  description?: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  [key: string]: any; // Diğer alanlar için esneklik
}

export const getData = async (animalName: string): Promise<WikipediaData | null> => {
  const language = (i18n.language || 'en').slice(0, 2);
  const wikiBase = `https://${language}.wikipedia.org`;
  const title = animalName.trim().replace(/ /g, '_');
  const url = `${wikiBase}/api/rest_v1/page/summary/${encodeURIComponent(title)}`;

  try {
    const response = await axios.get<WikipediaData>(url);
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return null;
    }
    console.error('Wikipedia API error:', error);
    throw error;
  }
};
