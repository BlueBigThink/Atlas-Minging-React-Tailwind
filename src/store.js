import { configureStore } from '@reduxjs/toolkit'
//import { createBrowserHistory } from 'history';
import balanceReducer from "./Slices/balance";

const reducer = {
  balance: balanceReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;