// src/pages/Home.js
import React from 'react';
import HomeBanner from '../components/page-section/home/HomeBanner';
import FeaturedProductsSection from '../components/page-section/home/FeaturedProductsSection';
import TopThreeMobile from '../components/page-section/home/mobile-view/TopThreeMobile';
import PartnersSection from '../components/page-section/home/PartnersSection';
import NewsHighlight from '../components/page-section/home/NewsHighlight';

function Home() {
  return (
    <div>
      <HomeBanner />
      <FeaturedProductsSection />
      <NewsHighlight />
      <PartnersSection />
    </div>
  );
}

export default Home;
