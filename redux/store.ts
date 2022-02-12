import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [thunk]

let userInfoFromStorage = null

if (typeof window !== 'undefined') {
  userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'))
  console.log(userInfoFromStorage);
}

const initialState = {
  auth: userInfoFromStorage
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store