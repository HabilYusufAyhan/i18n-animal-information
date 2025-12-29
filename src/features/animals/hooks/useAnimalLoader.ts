import { useTranslation } from 'react-i18next';
import { getData } from '../../../shared/services/data.service';
import { useGlobalStore } from '../../../shared/store/useGlobalStore';
import Animal from '../models/Animal';

export const useAnimalLoader = () => {
  const { i18n } = useTranslation();
  const { setLoading, setData } = useGlobalStore();

  const loadAnimal = async (query: string) => {
    setLoading(true);
    try {
      const data = await getData(query);
      setData(data ? new Animal(data) : null);
    } catch (error: any) {
      if (error.response?.status === 404) {
        setData(null);
      } else {
        console.error('Error fetching animal data:', error);
      }
    } finally {
      setLoading(false);
    }
  };
  return { loadAnimal };
};
