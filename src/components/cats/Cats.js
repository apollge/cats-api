import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CatItem from './CatItem';

const Cats = ({ cats: { data } }) => {
  return (
    <Row>
      {data.map((cat) => (
        <Col key={cat.id} className="col-md-3 col-sm-6 col-12">
          <CatItem key={cat.id} cat={cat} />
        </Col>
      ))}
    </Row>
  );
};

Cats.propTypes = {
  cats: PropTypes.object.isRequired,
};

export default Cats;
