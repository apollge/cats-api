import {
  CAT_NOT_FOUND,
  GET_BREEDS,
  GET_CAT,
  GET_CATS,
  RESET,
  SET_BREED_ID,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CAT_NOT_FOUND:
      return {
        ...state,
        catNotFound: true,
        loading: false,
      };

    case GET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
        loading: false,
      };

    case GET_CAT:
      return {
        ...state,
        cat: action.payload,
        loading: false,
      };

    case GET_CATS:
      return {
        ...state,
        cats:
          state.breedId !== action.payload.currentBreedId
            ? action.payload.catBreeds
            : state.cats.concat(action.payload.catBreeds),
        loading: false,
      };

    case SET_BREED_ID:
      return {
        ...state,
        breedId: action.payload,
      };

    case RESET:
      return {
        ...state,
        breedId: '',
        cat: [],
        cats: [],
        catNotFound: false,
        limit: 12,
        loading: false,
        page: 1,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
