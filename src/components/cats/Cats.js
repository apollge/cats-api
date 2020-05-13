import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import CatItem from './CatItem';
import CatContext from '../../context/cat/catContext';
import Spinner from '../layout/Spinner';

const Cats = () => {
  const { cats, getCats, limit } = useContext(CatContext);

  return (
    <Row className="text-center mx-auto d-block">
      <InfiniteScroll
        dataLength={cats.length}
        next={getCats}
        hasMore={cats.length <= limit && cats.length !== 0}
        loader={<Spinner />}
        endMessage={
          <Col>
            <p className="text-center">
              {cats.length === 0
                ? 'Start browsing for cats!'
                : 'No more cats to load'}
            </p>
          </Col>
        }
        scrollThreshold={1}
      >
        {cats.map((cat) => (
          <Col key={cat.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
            <CatItem cat={cat} />
          </Col>
        ))}
      </InfiniteScroll>
    </Row>
  );
};

export default Cats;
