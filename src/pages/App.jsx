import { useState, useEffect } from "react";
import { getAnimalData } from "../services/animal.service";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ResultsGrid from "../components/ResultsGrid";
import Animal from "../models/Animal";
import { useTranslation } from "react-i18next";

function App() {
  const [animalData, setAnimalData] = useState(null);
  const [searchAnimal, setSearchAnimal] = useState("");
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();

  const load = async (query) => {
    setLoading(true);
    try {
      const data = await getAnimalData(query, i18n.language);
      setAnimalData(data ? new Animal(data) : null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialQuery = (i18n.language || "").toLowerCase().startsWith("tr")
      ? "aslan"
      : "lion";
    load(initialQuery);
  }, [i18n.language]);

  const handleSearch = async () => {
    const defaultQuery = (i18n.language || "").toLowerCase().startsWith("tr")
      ? "aslan"
      : "lion";
    const q = searchAnimal.trim() || defaultQuery;
    await load(q);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <Header />
      <SearchBar
        value={searchAnimal}
        onChange={setSearchAnimal}
        onSearch={handleSearch}
        loading={loading}
      />

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <div className="text-5xl mb-4 animate-bounce">🔍</div>
            <p className="text-gray-600 text-lg">{t("app.loading")}</p>
          </div>
        </div>
      )}

      <ResultsGrid animal={animalData} loading={loading} />
    </div>
  );
}

export default App;
