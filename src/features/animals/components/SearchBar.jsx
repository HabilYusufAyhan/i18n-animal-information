import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { createAnimalSearchSchema } from '../schemas/searchSchema.js';

export default function SearchBar({ onSearch, loading }) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(createAnimalSearchSchema(t))
  });

  const submit = ({ query }) => {
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4 max-w-2xl mx-auto mb-12">
      <input
        {...register('query')}
        placeholder={t('animal.searchPlaceholder')}
        className="px-6 py-3 rounded-lg border-2 border-indigo-300 focus:border-indigo-600 focus:outline-none text-lg shadow-md transition"
        type="text"
      />

      {errors.query && <p className="text-red-500 text-sm text-center">{errors.query.message}</p>}

      <button
        type="submit"
        disabled={loading}
        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold rounded-lg shadow-lg transition duration-200 transform hover:scale-105"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <span className="inline-block animate-spin mr-2">⏳</span>
            {t('animal.searching')}
          </span>
        ) : (
          t('animal.searchButton')
        )}
      </button>
    </form>
  );
}
