import { productReducer } from './productReducer';
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    products: productReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;