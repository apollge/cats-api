import axios from 'axios';
import debounce from 'lodash/debounce';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import './App.css';
import Cats from './components/cats/Cats';
import Navigation from './components/layout/Navigation';
import Spinner from './components/layout/Spinner';

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [cats, setCats] = useState();
  const [loading, setLoading] = useState(false);

  const filterBreeds = (inputValue) => {
    return breeds.filter((breed) =>
      breed.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const getBreeds = async () => {
    setLoading(true);

    const res = await axios.get('https://api.thecatapi.com/v1/breeds');
    setBreeds(res.data);

    setLoading(false);
  };

  const handleInputChange = async (inputValue) => {
    if (!inputValue) {
      return;
    }

    setLoading(true);

    const cats = await axios.get(
      `https://api.thecatapi.com/v1/images/search?page=3&limit=10&breed_id=${inputValue.id}`
    );
    setCats(cats);

    setLoading(false);
  };

  const loadOptions = debounce((inputValue, callback) => {
    callback(filterBreeds(inputValue));
  }, 420);

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <div className="App">
      <Container>
        <Navigation />
        <AsyncSelect
          backspaceRemovesValue={true}
          cacheOptions
          className="mb-3"
          defaultOptions={breeds}
          escapeClearsValue={true}
          getOptionValue={(option) => option.id}
          getOptionLabel={(option) => option.name}
          isClearable={true}
          isLoading={loading}
          loadOptions={loadOptions}
          options={breeds}
          onChange={handleInputChange}
          placeholder={'Breeds'}
        />
        {loading && <Spinner />}
        {cats && <Cats cats={cats} loading={loading} />}
      </Container>
    </div>
  );
};

export default App;
