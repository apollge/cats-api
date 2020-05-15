import debounce from 'lodash/debounce';
import React, { useContext, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { CatContext } from '../../context/cat/CatState';

const Search = () => {
  const { breeds, loading, getBreeds, getCats, reset } = useContext(CatContext);

  const filterBreeds = (inputValue) => {
    return breeds.filter((breed) =>
      breed.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleInputChange = async (inputValue) => {
    if (!inputValue) {
      return;
    }

    reset();

    getCats(inputValue);
  };

  const loadOptions = debounce((inputValue, callback) => {
    callback(filterBreeds(inputValue));
  }, 420);

  useEffect(() => {
    if (!breeds.length) {
      getBreeds();
    }
  }, []);

  return (
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
      placeholder={'Type to search for Breeds'}
    />
  );
};

export default Search;
