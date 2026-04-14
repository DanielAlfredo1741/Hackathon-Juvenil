import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Feed from './pages/Feed';
import Studio from './pages/Studio';
import Verify from './pages/Verify';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected/App Layout Routes */}
        <Route path="/*" element={
          <div className="app-layout">
            <Navigation />
            <main style={{ paddingBottom: '80px', minHeight: 'calc(100vh - 64px)' }}>
              <Routes>
                <Route path="/feed" element={<Feed />} />
                <Route path="/studio" element={<Studio />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/feed" replace />} />
              </Routes>
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
