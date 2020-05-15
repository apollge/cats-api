import {
  CAT_NOT_FOUND,
  GET_BREEDS,
  GET_CAT,
  GET_CATS,
  RESET,
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
        breedId: action.payload.breedId,
        cats: state.cats.concat(action.payload.catBreeds),
        loading: false,
        page: state.page + 1,
      };

    case RESET:
      return {
        ...state,
        breedId: '',
        cats: [],
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
