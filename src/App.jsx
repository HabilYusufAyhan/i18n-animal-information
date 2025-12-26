import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalsPage from './features/animals/pages/animalPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="*" element={<AnimalsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
