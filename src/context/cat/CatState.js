import React, { useReducer } from 'react';
import axios from 'axios';
import CatContext from './catContext';
import CatReducer from './catReducer';
import {
  CAT_NOT_FOUND,
  GET_BREEDS,
  GET_CAT,
  GET_CATS,
  SET_BREED_ID,
  SET_LOADING,
  RESET,
} from '../types';

const initialState = {
  breedId: '',
  cat: [],
  cats: [],
  catNotFound: false,
  limit: 12,
  loading: false,
  page: 1,
};

let pageCtr = initialState.page;

const CatState = (props) => {
  const [state, dispatch] = useReducer(CatReducer, initialState);

  // Get Breeds
  const getBreeds = async () => {
    setLoading();

    const res = await axios.get('https://api.thecatapi.com/v1/breeds');

    dispatch({
      type: GET_BREEDS,
      payload: res.data,
    });
  };

  // Get Cat
  const getCat = async (catId) => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/${catId}`
      );

      dispatch({
        type: GET_CAT,
        payload: res.data,
      });
    } catch (error) {
      if (error.response.status === 400) {
        dispatch({
          type: CAT_NOT_FOUND,
        });
      }
    }
  };

  // Get Cats
  const getCats = async (inputValue = '') => {
    setLoading();

    if (inputValue) {
      dispatch({
        type: SET_BREED_ID,
        payload: inputValue.id,
      });
    }

    let currentBreedId = inputValue.id || state.breedId;

    const res = await axios.get(
      `https://api.thecatapi.com/v1/images/search?page=${
        inputValue ? pageCtr : ++pageCtr
      }&limit=${state.limit}&breed_id=${currentBreedId}`
    );

    let catBreeds = res.data;

    dispatch({
      type: GET_CATS,
      payload: { currentBreedId, catBreeds },
    });
  };

  const reset = () => {
    pageCtr = initialState.page;

    dispatch({
      type: RESET,
      payload: initialState,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CatContext.Provider
      value={{
        ...state,
        getCats,
        getBreeds,
        getCat,
        reset,
      }}
    >
      {props.children}
    </CatContext.Provider>
  );
};

export default CatState;
