import React from 'react';
import { Form } from 'react-bootstrap';

export default function SidebarFilter({
  selectedCategories,
  selectedTypes,
  clearFilters,
  handleCategoryToggle,
  handleTypeToggle,
}) {
  const categories = ['Nyheter', 'Mest populære'];
  const productTypes = ['Acaibowls', 'AçaíBoks (5.8L)'];

  return (
    <div
      className="bg-white p-4 pt-5 sticky-sidebar"
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <h5 className="fw-bold mb-2 text-light-purple">Sorter etter</h5>
      <hr className="my-2" style={{ opacity: 0.1 }} />

      <Form>
        <Form.Check
          type="checkbox"
          id="filter-all"
          label="Alle produkter"
          checked={selectedCategories.length === 0 && selectedTypes.length === 0}
          onChange={clearFilters}
          className="mb-2"
        />

        {categories.map((category) => (
          <Form.Check
            key={category}
            type="checkbox"
            id={`filter-${category}`}
            label={category}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryToggle(category)}
            className="mb-2"
          />
        ))}
      </Form>

      <h5 className="fw-bold mt-4 mb-2 text-light-purple">Type</h5>
      <hr className="my-2" style={{ opacity: 0.1 }} />

      <Form>
        {productTypes.map((type) => (
          <Form.Check
            key={type}
            type="checkbox"
            id={`filter-type-${type}`}
            label={type}
            checked={selectedTypes.includes(type)}
            onChange={() => handleTypeToggle(type)}
            className="mb-2"
          />
        ))}
      </Form>
    </div>
  );
}
