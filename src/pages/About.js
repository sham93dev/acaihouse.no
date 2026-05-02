"use client";

import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <div>
      {/* Seksjon 1 */}
      <section className="text-center py-5 px-3 bg-light text-dark position-relative" style={{ zIndex: 1 }}>
        {/* Dekorative sirkler bak innholdet */}
        <div className="background-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>

        <div className="container d-flex flex-column flex-md-column-reverse pt-4 position-relative" style={{ zIndex: 2 }}>
          {/* BILDER – først på mobil, sist på desktop */}
          <div className="row justify-content-center g-4 py-3">
            <div className="col-4 col-sm-4 col-md-3">
              <img src="/assets/brasil1.avif" alt="Acai Bowl" className="img-fluid rounded-3 shadow-sm" />
            </div>
            <div className="col-4 col-sm-4 col-md-3">
              <img src="/assets/brasil2.avif" alt="Brasil natur" className="img-fluid rounded-3 shadow-sm" />
            </div>
            <div className="col-4 col-sm-4 col-md-3">
              <img src="/assets/brasil3.avif" alt="BJJ reise" className="img-fluid rounded-3 shadow-sm" />
            </div>
          </div>

          {/* TEKST – sist på mobil, først på desktop */}
          <div>
            <h2
              className="display-5 fw-bold mb-4 ´
          
          "
            >
              Slik begynte reisen
            </h2>
            <p className="lead mx-auto mb-5" style={{ maxWidth: "720px" }}>
              Det startet som en tropisk drøm under palmene i Brasil. Mellom treningsøkter på matten, forelsket vi oss i smaken av ekte açaí. Som to BJJ-svartbelter med lidenskap for både kvalitet og eventyr, bestemte vi oss: Norge fortjener ekte açaí – akkurat slik vi opplevde det i Rio. Nå serverer vi Amazonas på skje – midt i hjertet av Oslo.
            </p>
          </div>
        </div>
      </section>

      {/* Seksjon 2 */}
      <section className="bg-honey-yellow py-5 text-center bg-purple text-white">
        <div className="container">
          <h2 className="h2 fw-bold mx-auto" style={{ maxWidth: "640px" }}>
            Det handler ikke bare om smak – det handler om opplevelse. Og om å dele den følelsen med deg.
          </h2>
        </div>
      </section>

      {/* Seksjon 3 */}
      <section class="bg-white py-5">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-md-6">
              <h2 class="h3 fw-bold mb-3 text-dark-purple">Vi henter açaí med hjertet – direkte fra bærekraftige kilder i Amazonas.</h2>
              <p class="lead text-muted mb-4">Med kjærlighet til smak, natur og menneskene bak. Prøv våre populære bowls – perfekt for både energi og nytelse!</p>
              <a href="/produkter" class="btn btn-lg rounded-pill px-4 py-2 fw-semibold text-white bg-dark-purple hover-bg-deeper-purple transition">
                Bestill
              </a>
            </div>
            <div class="col-md-6 text-center">
              <img src="/assets/acai2.jpg" alt="Acai bowl" class="img-fluid rounded-3 shadow-sm hover-zoom" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
