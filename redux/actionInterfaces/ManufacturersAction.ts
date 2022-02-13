import { actionTypes } from "../actionTypes"

interface getManufacturersPending {
    type: actionTypes.GET_MANUFACTURERS_PENDING;
}

interface getManufacturersSuccess {
    type: actionTypes.GET_MANUFACTURERS_SUCCESS;
    payload: any;
}

interface getManufacturersFail {
    type: actionTypes.GET_MANUFACTURERS_FAIL;
    payload: string;
}

export type ManufacturersAction = 
getManufacturersPending |
getManufacturersSuccess |
getManufacturersFail 
