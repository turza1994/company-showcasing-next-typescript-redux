import { actionTypes } from './../actionTypes';
import axios from 'axios'

export const getManufacturers = (token: string) => async(dispatch: any)=>{
    dispatch({
        type: actionTypes.GET_MANUFACTURERS_PENDING
    })

    try{
        const {data} = await axios.get('https://devapi.dhakai.com/api/v2/manufacturers', {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
         })
        dispatch({
            type: actionTypes.GET_MANUFACTURERS_SUCCESS,
            payload: data
        })

    }catch(err: any){
        dispatch({
            type: actionTypes.GET_MANUFACTURERS_FAIL,
            payload: err?.message
        })
    }
}