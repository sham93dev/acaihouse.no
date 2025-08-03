// src/components/page-section/products/TypeSelector.js
import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export default function TypeSelector({ selectedTypes, onChange }) {
  const types = ['Acaibowls', 'AçaíBoks (5.8L)'];

  return (
    <div className="d-lg-none text-center mb-4 px-3">
      <ButtonGroup>
        {types.map((type, idx) => (
          <ToggleButton
            key={type}
            id={`type-${idx}`}
            type="checkbox"
            variant={selectedTypes.includes(type) ? 'primary' : 'outline-secondary'}
            checked={selectedTypes.includes(type)}
            value={type}
            onChange={() => onChange(type)}
            className="fw-semibold px-3"
          >
            {type}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}
