import { actionTypes } from './../actionTypes';
import axios from 'axios'

export const getProducts = () => async(dispatch: any)=>{
    dispatch({
        type: actionTypes.GET_PRODUCTS_PENDING
    })
    try{
        const {data} = await axios.get('https://fakestoreapi.com/products')
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(err: any){
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: err?.message
        })
    }
}