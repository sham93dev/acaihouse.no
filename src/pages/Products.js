import React, { useState, useMemo } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Breadcrumb,
  Pagination,
} from 'react-bootstrap';
import ProductCard from '../components/ui/ProductCards';
import SidebarFilter from '../components/page-section/products/SidebarFilter';
import TypeSelector from '../components/page-section/products/TypeSelector';
import { products } from '../data/acaibowls';
import { Link } from 'react-router-dom';

const PRODUCTS_PER_PAGE = 6;

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setShowFilters(false);
  };

  const handleTypeToggle = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
    setShowFilters(false);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTypes([]);
    setShowFilters(false);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((cat) => {
          if (cat === 'Nyheter') return product.isNew;
          if (cat === 'Mest populære') return product.topSeller;
          return product.category?.toLowerCase().includes(cat.toLowerCase());
        });

      const matchesType =
        selectedTypes.length === 0 ||
        selectedTypes.some((t) =>
          product.type?.toLowerCase().includes(t.toLowerCase())
        );

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategories, selectedTypes]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginated = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <Container fluid className="bg-light">
      {/* Mobil: filter-toggle-knapp */}
      <div className="d-lg-none text-end p-3">
        <button
          className="btn btn-outline-secondary"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Skjul filter' : 'Vis filter'}
        </button>
      </div>

      <Row className="gx-0" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* VENSTRE: SIDEBAR */}
        <Col
          lg={3}
          className={`border-end bg-white ${
            showFilters ? 'd-block' : 'd-none'
          } d-lg-block`}
        >
          <SidebarFilter
            selectedCategories={selectedCategories}
            selectedTypes={selectedTypes}
            clearFilters={clearFilters}
            handleCategoryToggle={handleCategoryToggle}
            handleTypeToggle={handleTypeToggle}
          />
        </Col>

        {/* HØYRE: PRODUKTER */}
        <Col
          lg={9}
          className="p-4"
          style={{ height: '100vh', overflowY: 'auto' }}
        >
          {/* Breadcrumbs + søkefelt */}
          <Row className="align-items-center mb-4">
            <Col xs={12} md={8}>
              <Breadcrumb className="mb-2 mb-md-0">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                  Hjem
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Alle produkter</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col xs={12} md={4}>
              <Form.Control
                type="search"
                placeholder="Søk..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </Col>
          </Row>

          {/* TypeSelector (mobilvisning) */}
          <TypeSelector
            selectedTypes={selectedTypes}
            onChange={handleTypeToggle}
          />

          {/* Produkter */}
          <Row className="g-4">
            {paginated.length > 0 ? (
              paginated.map((product) => (
                <Col key={product.slug} xs={12} sm={6} md={4}>
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <p className="text-muted ps-3">Ingen produkter funnet.</p>
            )}
          </Row>

          {/* Paginering */}
          {totalPages > 1 && (
            <Pagination className="mt-4 justify-content-center">
              {[...Array(totalPages)].map((_, i) => (
                <Pagination.Item
                  key={i}
                  active={i + 1 === currentPage}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          )}
        </Col>
      </Row>
    </Container>
  );
}
