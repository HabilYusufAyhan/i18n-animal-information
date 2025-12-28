import { useTranslation } from 'react-i18next';
import { getData } from '../../../shared/services/data.service';
import { useGlobalStore } from '../../../shared/store/useGlobalStore';
import Plant from '../models/Plant';
export const usePlantLoader = () => {
  const { i18n } = useTranslation();
  const { setLoading, setData } = useGlobalStore();

  const loadPlant = async (query) => {
    setLoading(true);
    try {
      const data = await getData(query, i18n.language);
      setData(data ? new Plant(data) : null);
    } catch (error) {
      if (error.response?.status === 404) {
        setData(null);
      } else {
        console.error('Error fetching plant data:', error);
      }
    } finally {
      setLoading(false);
    }
  };
  return { loadPlant };
};
