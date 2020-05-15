import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import CatReducer from './catReducer';
import {
  CAT_NOT_FOUND,
  GET_BREEDS,
  GET_CAT,
  GET_CATS,
  SET_LOADING,
  RESET,
} from '../types';

const initialState = {
  breedId: '',
  breeds: {},
  cat: [],
  cats: [],
  catNotFound: false,
  limit: 12,
  loading: false,
  page: 1,
};

export const CatContext = createContext(initialState);

export const CatProvider = (props) => {
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
      state.breedId = inputValue.id;
    }

    const res = await axios.get(
      `https://api.thecatapi.com/v1/images/search?page=${state.page}&limit=${state.limit}&breed_id=${state.breedId}`
    );

    let catBreeds = res.data;

    dispatch({
      type: GET_CATS,
      payload: {
        breedId: state.breedId,
        catBreeds,
      },
    });
  };

  const reset = () => {
    state.page = initialState.page;

    dispatch({
      type: RESET,
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
