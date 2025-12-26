import AnimalCard from './AnimalCard';
import { useTranslation } from 'react-i18next';

export default function ResultsGrid({ animal, loading }) {
  const { t } = useTranslation();

  if (loading) return null;

  if (!animal) {
    return <p className="text-center text-gray-600 text-lg mt-12">{t('app.noAnimals')}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto">
      {animal != null ? (
        <AnimalCard animal={animal} />
      ) : (
        <div>
          <p className="text-center text-gray-600 text-lg mt-12">{t('app.noAnimals')}</p>
        </div>
      )}
    </div>
  );
}
