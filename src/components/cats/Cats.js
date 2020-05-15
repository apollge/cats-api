import React, { useContext } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import CatItem from './CatItem';
import { CatContext } from '../../context/cat/CatState';

const Cats = () => {
  const { cats, getCats, limit } = useContext(CatContext);

  return (
    <InfiniteScroll
      dataLength={cats.length}
      next={getCats}
      hasMore={cats.length % limit === 0 && cats.length !== 0}
      loader={
        <Spinner animation="grow" className="text-center mx-auto d-block" />
      }
      endMessage={
        <Row className="text-center mx-auto d-block">
          <Col>
            <p>
              {cats.length === 0
                ? 'Start browsing for cats!'
                : 'No more cats to load'}
            </p>
          </Col>
        </Row>
      }
      scrollThreshold={1}
    >
      {cats.length > 0 && (
        <Row className="mr-0 ml-0">
          {cats.map((cat, idx) => (
            <Col key={idx} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <CatItem cat={cat} />
            </Col>
          ))}
        </Row>
      )}
    </InfiniteScroll>
  );
};

export default Cats;
