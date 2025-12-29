import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/navigation/Header.js';
import SwitchSpecies from '../components/navigation/SwitchSpecies.js';
import SearchBar from '../components/forms/SearchBar.js';
import { useEffect } from 'react';
import { useGlobalStore } from '../store/useGlobalStore.js';
import LoadingBar from '../components/feedback/LoadingBar.js';
export default function RootLayout() {
  const { setSpecies, loading } = useGlobalStore();
  const location = useLocation();
  useEffect(() => {
    setSpecies(location.pathname.includes('plants') ? 'plant' : 'animal');
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <Header />
      <SwitchSpecies />
      <SearchBar />
      {loading && <LoadingBar />}
      <Outlet />
    </div>
  );
}
