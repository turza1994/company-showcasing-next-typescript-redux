import { actionTypes } from './../actionTypes';
import axios from "axios"

export const login = (user: object)=>async(dispatch: any)=>{
    localStorage.removeItem('userInfo')
    try{
        const {email, password}: any = user
        dispatch({
            type: actionTypes.LOGIN_PENDING
        })

        const { data } = await axios.post(
            'https://devapi.dhakai.com/api/v2/login-buyer',
            {
                auth: {
                    email,
                    deviceUuid: "1213sdsfs456sdsd778sds87787dsd"
                },
                password
            }
        )
        if(data.message == 'SUCCESS'){
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: data,
            })

            localStorage.setItem('userInfo', JSON.stringify(data))
        }else{
            throw new Error('PASSWORD_MISMATCH')
        }

    }catch (error: any) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
