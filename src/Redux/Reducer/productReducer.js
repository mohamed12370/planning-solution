import {
  GET_ALL_WISHLIST,
  DELETE_ONE_WISHLIST,
  GET_ALL_PRODUCTS,
  GET_SERECH_PRODUCTS,
  GET_ONE_PRODUCT,
  GET_ALL_CMMENTS,
  ADD_CMMENTS,
  EDITE_CMMENTS,
  DELETE_CMMENTS,
} from '../types';

import { data } from '../../data';

const initialState = {
  wishlistUser: [],
  wishlistDel: [],
  allProducts: data,
  getOneProduct: [],
  getAllComments: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_WISHLIST:
      return {
        ...state,
        wishlistUser: action.payload,
      };

    case DELETE_ONE_WISHLIST:
      return {
        ...state,
        wishlistUser: action.payload,
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: data,
      };

    case GET_SERECH_PRODUCTS:
      const newData = data.filter((el) => el.name.includes(action.payload));
      return {
        ...state,
        allProducts: newData,
      };

    case GET_ONE_PRODUCT:
      const oneProduct = data.filter((el) => el.id === +action.payload);
      return {
        ...state,
        getOneProduct: oneProduct,
      };

    case GET_ALL_CMMENTS:
      return {
        ...state,
        getAllComments: action.payload,
      };

    case ADD_CMMENTS:
      return {
        ...state,
        getAllComments: action.payload,
      };

    case EDITE_CMMENTS:
      return {
        ...state,
        getAllComments: action.payload,
      };

    case DELETE_CMMENTS:
      return {
        ...state,
        getAllComments: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
