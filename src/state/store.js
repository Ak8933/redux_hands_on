// import { applyMiddleware,createStore } from "redux"; 
// import { thunk } from "redux-thunk";
// import reducers from "./reducers"


// export const store = createStore(reducers,{},applyMiddleware(thunk))



import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; // Example custom middleware
import reducers from './reducers';

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

