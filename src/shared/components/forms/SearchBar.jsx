import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { createGlobalSearchSchema } from '../../schemas/searchSchema.js';
import { useGlobalStore } from '../../store/useGlobalStore.js';
import { useAnimalLoader } from '../../../features/animals/hooks/useAnimalLoader.js';
import { usePlantLoader } from '../../../features/plants/hooks/usePlantLoader.js';
import ErrorMessage from '../ErrorMessage.jsx';

export default function SearchBar() {
  const { t } = useTranslation();
  const { species, loading } = useGlobalStore();
  const { loadAnimal } = useAnimalLoader();
  const { loadPlant } = usePlantLoader();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(createGlobalSearchSchema(t))
  });

  const submit = ({ query }) => {
    if (species === 'animal') {
      loadAnimal(query);
    } else {
      loadPlant(query);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4 max-w-2xl mx-auto mb-12">
      <input
        {...register('query')}
        placeholder={
          species === 'animal' ? t('animal.searchPlaceholder') : t('plant.searchPlaceholder')
        }
        className="px-6 py-3 rounded-lg border-2 border-indigo-300 focus:border-indigo-600 focus:outline-none text-lg shadow-md transition"
        type="text"
      />

      <ErrorMessage message={errors.query?.message} />

      <button
        type="submit"
        disabled={loading}
        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold rounded-lg shadow-lg transition duration-200 transform hover:scale-105"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <span className="inline-block animate-spin mr-2">⏳</span>
            {t('app.searching')}
          </span>
        ) : species === 'animal' ? (
          t('animal.searchButton')
        ) : (
          t('plant.searchButton')
        )}
      </button>
    </form>
  );
}
