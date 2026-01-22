import { useState } from 'react';
import { Header } from './components/Header';
import { HeroIntro } from './components/HeroIntro';
import { CourseCatalog } from './components/CourseCatalog';
import { FeaturedTracks } from './components/FeaturedTracks';
import { PopularTopics } from './components/PopularTopics';
import { CommunityHub } from './components/CommunityHub';
import { RecentPosts } from './components/RecentPosts';
import { ResourceUpdates } from './components/ResourceUpdates';
import { SiteFooter } from './components/SiteFooter';
import { CookieConsent } from './components/CookieConsent';
import { RegisterModal } from './components/RegisterModal';

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header onRegisterClick={handleRegisterClick} />
      
      <main>
        <HeroIntro onRegisterClick={handleRegisterClick} />
        <CourseCatalog onRegisterClick={handleRegisterClick} />
        <FeaturedTracks />
        <PopularTopics />
        <CommunityHub />
        <RecentPosts />
        <ResourceUpdates />
      </main>

      <SiteFooter />
      <CookieConsent />
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
      />
    </div>
  );
}

export default App;
