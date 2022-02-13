import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [thunk]

let userInfoFromStorage = (typeof window !== 'undefined') && localStorage.getItem('userInfo')
let userInfo = null

if (typeof window !== 'undefined') {
  userInfo = userInfoFromStorage && JSON.parse(userInfoFromStorage)
}

const initialState = {
  auth: {
    userInfo
  }
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store