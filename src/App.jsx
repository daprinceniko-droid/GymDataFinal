import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { UserDataProvider, UserDataContext } from './context/UserDataContext';
import {
  Landing,
  Calculator,
  ResultsTransition,
  Results,
  Breakdown,
  Profile,
  Journal,
  Progress,
} from './pages';
import { Navigation } from './components/layout';
import { SiteFooter } from './components/SiteFooter';
import { LoadingScreen } from './components/LoadingScreen';
import { useContext } from 'react';

// Protected Route Component
function ProtectedRoute({ element }) {
  const { results } = useContext(UserDataContext);
  return results ? element : <Navigate to="/calculate" replace />;
}

function AppLayout() {
  const location = useLocation();
  const isTransitionPage = location.pathname === '/results-transition';
  const isLandingPage = location.pathname === '/';

  return (
    <div className="app min-h-screen flex flex-col overflow-x-hidden">
      {/* Top Navigation - show on all pages */}
      <Navigation />

      {/* Page routes - pages handle their own background */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/calculate" element={<Calculator />} />
          <Route path="/results-transition" element={<ResultsTransition />} />
          <Route path="/results" element={<ProtectedRoute element={<Results />} />} />
          <Route path="/breakdown" element={<Breakdown />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>

      {/* Footer - hide on transition page and landing page (landing includes its own) */}
      {!isTransitionPage && !isLandingPage && <SiteFooter />}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <UserDataProvider>
        <Router>
          <AppLayout />
        </Router>
      </UserDataProvider>
    </>
  );
}

export default App;





