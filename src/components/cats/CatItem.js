import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CatItem = ({ cat }) => {
  return (
    <Card className="pt-3 mb-3">
      <Image
        className="avatar mx-auto"
        roundedCircle
        style={{
          backgroundImage: `url(${cat.url})`,
        }}
      />
      <Card.Body className="text-center">
        <Card.Title>{cat.name}</Card.Title>
        <Link className="btn btn-primary mx-auto" to={`/cat/${cat.id}`}>
          View Details
        </Link>
      </Card.Body>
    </Card>
  );
};

CatItem.propTypes = {
  cat: PropTypes.object.isRequired,
};

export default CatItem;
