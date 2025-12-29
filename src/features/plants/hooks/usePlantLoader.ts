import { getData } from '../../../shared/services/data.service';
import { useGlobalStore } from '../../../shared/store/useGlobalStore';
import Plant from '../models/Plant';

export const usePlantLoader = () => {
  const { setLoading, setData } = useGlobalStore();

  const loadPlant = async (query: string) => {
    setLoading(true);
    try {
      const data = await getData(query);
      setData(data ? new Plant(data) : null);
    } catch (error: any) {
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
