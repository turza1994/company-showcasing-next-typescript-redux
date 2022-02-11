import { ProductAction } from './../actionInterfaces/productAction';
import { actionTypes } from '../actionTypes';
import { IProduct } from './../../types';

interface IState{
  allProducts: null | IProduct[],
  loading: boolean,
  error: null | string
}

const initialState: IState = {
    allProducts: null,
    loading: false,
    error: null
}

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
      case actionTypes.GET_PRODUCTS_PENDING: //Getting all Products
        return { 
            ...state, 
            loading: true 
        }
      case actionTypes.GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          allProducts: action.payload,
        }
      case actionTypes.GET_PRODUCTS_FAIL:
        return { 
            ...state,
            loading: false,
            error: action.payload 
        }
      default:
        return state
    }
  }