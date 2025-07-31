// src/components/page-section/home/PartnersSection.js
import React from 'react';
import { Container } from 'react-bootstrap';

export default function PartnersSection() {
  const partners = [
    { name: 'Wolt', logo: '/assets/partners/wolt.png' },
    { name: 'Foodora', logo: '/assets/partners/foodora.png' },
    { name: 'Printitpro', logo: '/assets/partners/printitpro.png' },
    { name: 'Beautybees', logo: '/assets/partners/beautybees.png' },
    { name: 'Jitsbutikk', logo: '/assets/partners/jitsbutikk.png' },
  ];

  return (
    <section className="partners-section py-5 bg-white">
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold display-5 text-light-purple">Våre samarbeidspartnere</h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '700px' }}>
            Akkurat som açaíen vår, handler samarbeid for oss om renhet og kvalitet.
            Vi jobber med folk som forstår verdien av ekte råvarer, ekte relasjoner og langsiktig smak.
          </p>
        </div>

        {/* Mobile - Scrollable */}
        <div className="d-flex d-md-none overflow-auto gap-4 px-1">
          {partners.map((partner) => (
            <div key={partner.name} style={{ flex: '0 0 auto', width: '120px' }}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="img-fluid d-block mx-auto"
                style={{ height: '60px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        {/* Desktop - Grid */}
        <div className="d-none d-md-flex justify-content-between align-items-center my-5 py-4 px-3">
          {partners.map((partner) => (
            <div key={partner.name} style={{ flex: 1, padding: '0 10px' }}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="img-fluid d-block mx-auto"
                style={{ height: '60px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
