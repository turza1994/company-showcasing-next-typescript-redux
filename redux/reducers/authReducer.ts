import { actionTypes } from "../actionTypes";

const initialState: object = {
    loading: false,
    userInfo: null,
    error: null
}

export const authReducer = (state: any = initialState, action: any)=>{
    switch(action.type){
        case actionTypes.LOGIN_PENDING:
            return {
                ...state,
                loading: true
            }
        
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default:
            return state
            
    }
}