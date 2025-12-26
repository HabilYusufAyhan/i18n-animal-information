import { useEffect } from 'react';
import { getAnimalData } from '../services/animal.service';
import Header from '../../../shared/components/Header.jsx';
import SearchBar from '../components/SearchBar';
import ResultsGrid from '../components/ResultsGrid';
import Animal from '../models/Animal';
import { useTranslation } from 'react-i18next';
import { useAnimalStore } from '../store/useAnimalStore.js';

function animalPage() {
  const { t, i18n } = useTranslation();
  const { animalData, setAnimalData, loading, setLoading } = useAnimalStore();

  const load = async (query) => {
    setLoading(true);
    try {
      const data = await getAnimalData(query, i18n.language);
      setAnimalData(data ? new Animal(data) : null);
    } catch (error) {
      if (error.status === 404) {
        setAnimalData(null);
      } else {
        console.error('Error fetching animal data:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialQuery = i18n.language?.toLowerCase().startsWith('tr') ? 'aslan' : 'lion';

    load(initialQuery);
  }, [i18n.language]);

  const handleSearch = async (query) => {
    const fallback = i18n.language?.toLowerCase().startsWith('tr') ? 'aslan' : 'lion';

    await load(query || fallback);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <Header />

      <SearchBar onSearch={handleSearch} loading={loading} />

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <div className="text-5xl mb-4 animate-bounce">🔍</div>
            <p className="text-gray-600 text-lg">{t('app.loading')}</p>
          </div>
        </div>
      )}

      <ResultsGrid animal={animalData} loading={loading} />
    </div>
  );
}

export default animalPage;
