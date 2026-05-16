import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import Landing    from './pages/Landing';
import Calculator from './pages/Calculator';
import Breakdown  from './pages/Breakdown';
import Profile    from './pages/Profile';
import Journal    from './pages/Journal';
import Progress   from './pages/Progress';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/"           element={<Landing />} />
        <Route path="/calculate"  element={<Calculator />} />
        <Route path="/breakdown"  element={<Breakdown />} />
        <Route path="/profile"    element={<Profile />} />
        <Route path="/journal"    element={<Journal />} />
        <Route path="/progress"   element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
