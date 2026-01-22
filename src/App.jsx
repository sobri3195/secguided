import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import PopularSections from './components/PopularSections';
import CommunitySections from './components/CommunitySections';
import LatestPosts from './components/LatestPosts';
import LatestResources from './components/LatestResources';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CoursesSection />
        <PopularSections />
        <CommunitySections />
        <LatestPosts />
        <LatestResources />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
