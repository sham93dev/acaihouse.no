// src/data/acaibowls.js

export const products = [
  {
    slug: 'golden-passion',
    title: 'Golden Passion',
    featured: true,
    topSeller: true,
    images: [
      '/assets/bowls/golden-passion/GoldenPassion.jpg',
      '/assets/bowls/golden-passion/GoldenPassion2.jpg',
    ],
    description:
      'Denne bowlen tar deg til varmere strøk. Syrlig pasjonsfrukt, søt mango og kremet banan møter crunchy kokos og granola.',
    toppings: ['🍌 Banan', '🥭 Mango', '🥣 Granola', '🥥 Kokosflak', '🍊 Pasjonsfrukt'],
    allergens: ['🌱 Chiafrø', '🥥 Kokos'],
    category: 'Acaibowl',
    sizes: {
      Medium: 150,
      Stor: 200,
    },
  },
  {
    slug: 'energiboost',
    title: 'Energiboost',
    featured: true,
    topSeller: false,
    images: ['/assets/bowl2.jpg', '/assets/bowl2-alt1.jpg'],
    description: 'Gir deg et energikick med smak av bringebær og banan.',
    toppings: ['🍌 Banan', '🍓 Jordbær', '🍯 Honning', '🥜 Peanøttsmør'],
    allergens: ['🥜 Peanøtter'],
    category: 'Acaibowl',
    sizes: {
      Medium: 150,
      Stor: 200,
    },
  },
  {
    slug: 'energiboost2',
    title: 'Energiboost',
    featured: true,
    topSeller: true,
    images: ['/assets/bowl2.jpg', '/assets/bowl2-alt1.jpg'],
    description: 'Gir deg et energikick med smak av bringebær og banan.',
    toppings: ['🍌 Banan', '🍓 Jordbær', '🍯 Honning', '🥜 Peanøttsmør'],
    allergens: ['🥜 Peanøtter'],
    category: 'Acaibowl',
    sizes: {
      Medium: 150,
      Stor: 200,
    },
  },
  {
    slug: 'amazon-mix',
    title: 'Amazon Mix',
    featured: true,
    topSeller: true,
    images: ['/assets/bowl3.jpg', '/assets/bowl3-alt1.jpg'],
    description: 'En fruktig miks inspirert av Amazonas.',
    toppings: ['🍇 Açaí', '🥝 Kiwi', '🍍 Ananas', '🥥 Kokos'],
    allergens: ['🥥 Kokos'],
    category: 'Acaibowl',
    sizes: {
      Medium: 150,
      Stor: 200,
    },
  },
  // 👉 flere produkter uten `topSeller: true` hvis du har
];
