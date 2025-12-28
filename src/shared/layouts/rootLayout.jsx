import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/navigation/Header.jsx';
import SwitchSpecies from '../components/navigation/SwitchSpecies.jsx';
import SearchBar from '../components/forms/SearchBar.jsx';
import { useEffect } from 'react';
import { useGlobalStore } from '../../shared/store/useGlobalStore.js';
import LoadingBar from '../components/feedback/LoadingBar.jsx';
export default function RootLayout() {
  const { setSpecies, loading } = useGlobalStore();
  const location = useLocation();
  useEffect(() => {
    setSpecies(location.pathname.includes('plants') ? 'plant' : 'animal');
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <Header /> {/* Tüm sayfalarda ortak */}
      <SwitchSpecies /> {/* Tür seçimi bileşeni */}
      <SearchBar />
      {loading && <LoadingBar />}
      <Outlet /> {/* Alt rotalar burada render edilecek */}
    </div>
  );
}
