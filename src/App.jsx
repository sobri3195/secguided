import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Forums from './pages/Forums';
import WhatsNew from './pages/WhatsNew';
import Downloads from './pages/Downloads';
import Tutorials from './pages/Tutorials';
import Guides from './pages/Guides';
import Anticheat from './pages/Anticheat';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="forums" element={<Forums />} />
          <Route path="whats-new" element={<WhatsNew />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="guides" element={<Guides />} />
          <Route path="anticheat" element={<Anticheat />} />
          <Route path="info" element={<Info />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
