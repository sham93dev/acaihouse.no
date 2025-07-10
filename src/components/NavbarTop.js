// src/components/NavbarTop.js
import React from 'react';

function NavbarTop() {
  const text = "🍓 Åpent – smak ekte açaí! 💜 Frisk, naturlig og rå! 🚲 Bestill på Wolt i dag!";

  return (
    <div className="navbar-top d-flex align-items-center">
      <div className="ticker">
        <div className="ticker-track">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
