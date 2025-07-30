// src/pages/Home.js
import React from 'react';
import HomeBanner from '../components/page-section/home/HomeBanner';
import FeaturedProductsSection from '../components/page-section/home/FeaturedProductsSection';
import TopThreeMobile from '../components/page-section/home/TopThreeMobile';

function Home() {
  return (
    <div>
      <HomeBanner />
      <FeaturedProductsSection />
    </div>
  );
}

export default Home;
