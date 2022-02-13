import { ManufacturersAction } from './../actionInterfaces/ManufacturersAction';
import { actionTypes } from '../actionTypes';

interface IState{
  manufacturers: any,
  loading: boolean,
  error: null | string
}

const initialState: IState = {
    manufacturers: null,
    loading: false,
    error: null
}

export const manufacturersReducer = (state = initialState, action: ManufacturersAction) => {
    switch (action.type) {
      case actionTypes.GET_MANUFACTURERS_PENDING:
        return { 
            ...state, 
            loading: true 
        }
      case actionTypes.GET_MANUFACTURERS_SUCCESS:
        return {
          ...state,
          loading: false,
          manufacturers: action.payload,
        }
      case actionTypes.GET_MANUFACTURERS_FAIL:
        return { 
            ...state,
            loading: false,
            error: action.payload 
        }
      default:
        return state
    }
  }