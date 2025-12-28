import { useTranslation } from 'react-i18next';
import { useGlobalStore } from '../../store/useGlobalStore';

export default function Card({ data }) {
  const { species } = useGlobalStore();
  const { t } = useTranslation();
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl  overflow-hidden transform transition duration-300 shadow-2xl">
      <div className="w-full bg-linear-to-br from-indigo-200 to-blue-200 overflow-hidden">
        {data.image ? (
          <img className="w-full h-full object-cover" src={data.image} alt={data.title} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">
            {species === 'animal' ? '🦁' : '🌿'}
          </div>
        )}
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">{data.title}</h2>
        {data.description && (
          <p className="text-gray-600 text-sm mb-3 font-semibold">
            {t('app.type')}: {data.description}
          </p>
        )}
        <p className="text-gray-700 line-clamp-4 text-sm leading-relaxed">
          {data.extract || t('app.noDescription')}
        </p>
        <a
          href={data.wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
        >
          {t('app.readMore')} →
        </a>
      </div>
    </div>
  );
}
