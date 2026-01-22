import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import CookieBanner from '../CookieBanner';
import ScrollToTop from './ScrollToTop';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default RootLayout;
