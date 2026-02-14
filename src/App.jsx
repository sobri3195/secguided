import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RootLayout from './components/layout/RootLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Home from './pages/Home';
import Forums from './pages/Forums';
import WhatsNew from './pages/WhatsNew';
import Downloads from './pages/Downloads';
import Tutorials from './pages/Tutorials';
import Guides from './pages/Guides';
import QuestionBank from './pages/QuestionBank';
import Anticheat from './pages/Anticheat';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import SecurityBlueprints from './pages/SecurityBlueprints';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Main App Routes */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="forums" element={<Forums />} />
            <Route path="whats-new" element={<WhatsNew />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="guides" element={<Guides />} />
            <Route path="security-blueprints" element={<SecurityBlueprints />} />
            <Route path="question-bank" element={<QuestionBank />} />
            <Route path="anticheat" element={<Anticheat />} />
            <Route path="info" element={<Info />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            
            {/* Protected Routes */}
            <Route 
              path="dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="profile" 
              element={
                <ProtectedRoute>
                  <div className="min-h-screen bg-dark-900 text-white p-8">
                    <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
                    <div className="bg-dark-800 rounded-lg p-6">
                      <p>Manage your profile settings here.</p>
                    </div>
                  </div>
                </ProtectedRoute>
              } 
            />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
