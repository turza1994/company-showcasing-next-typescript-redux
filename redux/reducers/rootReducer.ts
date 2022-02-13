import { manufacturersReducer } from './manufacturersReducer';
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
    manufacturers: manufacturersReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;