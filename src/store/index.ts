import { configureStore } from "@reduxjs/toolkit";
import apiBaseSlice from "../api";
// import authReducer from "../screens/Login/LoginSlice"; 

const store = configureStore({
  reducer: {
    [apiBaseSlice.reducerPath]: apiBaseSlice.reducer,
    // auth: authReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiBaseSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>

export default store