import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGlobalStore } from '../../store/useGlobalStore';

export default function SwitchSpecies() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { species } = useGlobalStore();
  return (
    <div className="flex justify-center items-center flex-col mb-6 gap-3">
      <p>{t('app.speciesinfo')}</p>
      <div className="gap-2 flex ">
        <button
          onClick={() => navigate('/plants')}
          className={
            'py-3 w-32 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg cursor-pointer transition ' +
            (species === 'plant' ? '' : 'opacity-70 transform scale-95')
          }
        >
          {t('app.plants')}
        </button>

        <button
          onClick={() => navigate('/animals')}
          className={
            'py-3 w-32 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg cursor-pointer transition ' +
            (species === 'animal' ? '' : 'opacity-70 transform scale-95')
          }
        >
          {t('app.animals')}
        </button>
      </div>
    </div>
  );
}
