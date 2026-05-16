import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import Landing    from './pages/Landing';
import Calculator from './pages/Calculator';
import Breakdown  from './pages/Breakdown';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/"           element={<Landing />} />
        <Route path="/calculate"  element={<Calculator />} />
        <Route path="/breakdown"  element={<Breakdown />} />
        <Route path="/profile"    element={<UnderConstruction pageName="Me" />} />
        <Route path="/journal"    element={<UnderConstruction pageName="Journal" />} />
        <Route path="/progress"   element={<UnderConstruction pageName="Progress" />} />
      </Routes>
    </Router>
  );
}

export default App;
