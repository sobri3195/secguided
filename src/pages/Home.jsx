import React from 'react';
import Hero from '../components/Hero';
import CoursesSection from '../components/CoursesSection';
import PopularSections from '../components/PopularSections';
import CommunitySections from '../components/CommunitySections';
import LatestPosts from '../components/LatestPosts';
import LatestResources from '../components/LatestResources';

const Home = () => {
  return (
    <>
      <Hero />
      <CoursesSection />
      <PopularSections />
      <CommunitySections />
      <LatestPosts />
      <LatestResources />
    </>
  );
};

export default Home;
