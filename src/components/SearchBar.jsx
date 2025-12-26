import { useTranslation } from "react-i18next";

export default function SearchBar({ value, onChange, onSearch, loading }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-12">
      <input
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
        placeholder={t("app.searchPlaceholder")}
        className="px-6 py-3 rounded-lg border-2 border-indigo-300 focus:border-indigo-600 focus:outline-none text-lg shadow-md transition"
        type="text"
        value={value}
      />
      <button
        onClick={onSearch}
        disabled={loading}
        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-bold rounded-lg shadow-lg transition duration-200 transform hover:scale-105"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <span className="inline-block animate-spin mr-2">⏳</span>
            {t("app.searching")}
          </span>
        ) : (
          t("app.searchButton")
        )}
      </button>
    </div>
  );
}
