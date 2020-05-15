import React, { useContext, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CatContext } from '../../context/cat/CatState';
import ContentLoader from '../layout/ContentLoader';

const Cat = ({ match }) => {
  const { cat, catNotFound, getCat, loading } = useContext(CatContext);

  useEffect(() => {
    getCat(match.params.id);
  }, []);

  if (catNotFound) {
    return (
      <>
        <h1>Not Found</h1>
        <p className="lead">The cat you are looking for does not exists.</p>
      </>
    );
  }

  if (!cat.breeds || loading) {
    return <ContentLoader />;
  }

  const catInfo = cat.breeds[Object.keys(cat.breeds)[0]];

  return (
    <Card className="mb-3">
      <Card.Header>
        <Link to="/">Back</Link>
      </Card.Header>
      <Row className="p-3">
        <Col>
          <img src={cat.url} alt={catInfo.name} className="w-100 rounded" />
        </Col>
        <Col>
          <Card.Title as="h3">{catInfo.name}</Card.Title>
          <Card.Subtitle as="h5" className="mb-1">
            Origin: {catInfo.origin}
          </Card.Subtitle>
          <Card.Body className="mb-3">
            <Card.Text>{catInfo.description}</Card.Text>
          </Card.Body>
          <Card.Subtitle as="h5" className="mb-1">
            Temperament:
          </Card.Subtitle>
          <p>{catInfo.temperament}</p>
        </Col>
      </Row>
    </Card>
  );
};

export default Cat;
