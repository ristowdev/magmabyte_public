import { configureStore } from "@reduxjs/toolkit";
import apiBaseSlice from "../api";
// import authReducer from "../screens/Login/LoginSlice"; 
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "../slices/auth/authSlice";

const store = configureStore({
  reducer: {
    [apiBaseSlice.reducerPath]: apiBaseSlice.reducer,
    auth: authSlice,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiBaseSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;

setupListeners(store.dispatch);
