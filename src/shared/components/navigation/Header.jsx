import { useTranslation } from 'react-i18next';
import enIcon from '/icons/en.png';
import trIcon from '/icons/tr.png';

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <div className="text-center mb-4">
      {/* Language Toggle Buttons */}
      <div className="flex justify-center gap-3 mb-6">
        <div
          onClick={() => i18n.changeLanguage('en')}
          className={`px-4 py-2 rounded-lg text-2xl transition ${
            i18n.language === 'en'
              ? 'bg-indigo-600'
              : 'bg-white border-2 border-indigo-300 hover:bg-indigo-50'
          }`}
          aria-label="English"
        >
          <img className="w-7" src={enIcon} alt="English" />
        </div>
        <div
          onClick={() => i18n.changeLanguage('tr')}
          className={`px-4 py-2 rounded-lg text-2xl transition ${
            i18n.language === 'tr'
              ? 'bg-indigo-600'
              : 'bg-white border-2 border-indigo-300 hover:bg-indigo-50'
          }`}
          aria-label="Turkish"
        >
          <img className="w-7" src={trIcon} alt="Turkish" />
        </div>
      </div>

      <h1 className="text-5xl font-bold text-indigo-900 mb-2">{t('app.title')}</h1>
      <p className="text-gray-600 text-lg">{t('app.subtitle')}</p>
    </div>
  );
}
