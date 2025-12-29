import { useTranslation } from 'react-i18next';
import { useGlobalStore } from '../../store/useGlobalStore.js';
export default function LoadingBar() {
  const { t } = useTranslation();
  const { species } = useGlobalStore();
  console.log(species);

  return (
    <div className="flex justify-center items-center py-12">
      <div className="text-center">
        <div className="text-5xl mb-4 animate-bounce">🔍</div>
        <p className="text-gray-600 text-lg">
          {species === 'animal' ? t('animal.loading') : t('plant.loading')}
        </p>
      </div>
    </div>
  );
}
