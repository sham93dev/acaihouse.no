// src/components/page-section/home/HomeBannerProductSetup.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function HomeBannerProductSetup() {
  const { slug } = useParams();

  const bowls = {
    bowl1: {
      title: 'Tropisk Drøm',
      description: 'En frisk kombinasjon av mango, banan og kokos. Perfekt etter trening eller på varme dager.',
      image: '/assets/bowl1.jpg',
    },
    bowl2: {
      title: 'Energiboost',
      description: 'Peanøttsmør, kakao, banan og granola. En kraftpakke av en bowl.',
      image: '/assets/bowl2.jpg',
    },
    bowl3: {
      title: 'Amazon Mix',
      description: 'Autentisk açaí base med pasjonsfrukt og chia. Ren smak av Brasil.',
      image: '/assets/bowl3.jpg',
    },
  };

  const bowl = bowls[slug];

  if (!bowl) {
    return (
      <Container className="py-5">
        <h1>Produkt ikke funnet</h1>
        <p>Vi kunne ikke finne informasjon om dette produktet.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">{bowl.title}</h1>
      <img src={bowl.image} alt={bowl.title} className="img-fluid rounded mb-4" />
      <p className="lead">{bowl.description}</p>
    </Container>
  );
}

export default HomeBannerProductSetup;
