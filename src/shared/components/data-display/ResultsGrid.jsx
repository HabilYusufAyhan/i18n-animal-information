import { useGlobalStore } from '../../store/useGlobalStore';
import Card from './Card';
import { useTranslation } from 'react-i18next';

export default function ResultsGrid({ data, loading }) {
  const { t } = useTranslation();
  const { species } = useGlobalStore();

  if (loading) return null;
  if (data === undefined) {
    return (
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-700">{t('app.welcome')}</h2>
        <p className="text-gray-500 mt-2">{t('app.searchHint')}</p>
      </div>
    );
  }
  if (data == null) {
    return (
      <p className="text-center text-gray-600 text-lg mt-12">
        {species === 'animal' ? t('animal.noAnimals') : t('plant.noPlants')}
      </p>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto">
      <Card data={data} />
    </div>
  );
}
