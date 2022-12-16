import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState { 
  token: string | null;
}

const initialState: AuthState = { 
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{  token: string }>
    ) => { 
      state.token = action.payload.token;
    },
    defaultState: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;