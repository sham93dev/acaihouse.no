import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

function Breadcrumbs({ current }) {
  return (
    <Breadcrumb className="mb-4">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/produkter' }}>
        Alle produkter
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{current}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
