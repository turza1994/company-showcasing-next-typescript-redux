import { IProduct } from './../../types';
import { actionTypes } from "../actionTypes"

interface getProductsPending {
    type: actionTypes.GET_PRODUCTS_PENDING;
}

interface getProductsSuccess {
    type: actionTypes.GET_PRODUCTS_SUCCESS;
    payload: IProduct[];
}

interface getProductsFail {
    type: actionTypes.GET_PRODUCTS_FAIL;
    payload: string;
}

export type ProductAction = 
    getProductsPending |
    getProductsSuccess |
    getProductsFail 
