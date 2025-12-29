import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalPage from './features/animals/routes/AnimalPage.jsx';
import PlantPage from './features/plants/routes/PlantPage.jsx';
import RootLayout from './shared/layouts/rootLayout.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/animals" element={<AnimalPage />} />
          <Route path="/plants" element={<PlantPage />} />
          <Route path="*" element={<AnimalPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
