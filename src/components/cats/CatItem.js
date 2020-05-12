import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Nav } from 'react-bootstrap';

const CatItem = ({ cat }) => {
  console.log('cat', cat);
  return (
    <Card className="pt-3 mb-3">
      <Image
        className="avatar mx-auto"
        roundedCircle
        style={{
          width: '180px',
          height: '180px',
          backgroundImage: `url(${cat.url})`,
        }}
      />
      <Card.Body>
        <Card.Title>{cat.name}</Card.Title>
        <Nav.Link className="btn btn-primary" href={cat.id} variant="primary">
          View Details
        </Nav.Link>
      </Card.Body>
    </Card>
  );
};

CatItem.propTypes = {
  cat: PropTypes.object.isRequired,
};

export default CatItem;
