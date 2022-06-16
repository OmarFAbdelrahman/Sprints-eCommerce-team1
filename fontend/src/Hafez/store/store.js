import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import cartReducer from "../store/reducers/cart";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
