// userSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum AuthState {
  NotAuthenticated,
  Authenticated,
}

type User = {
  id: string;
  name: string;
  email: string;
};

type UserState = {
  authState: AuthState;
  user?: User;
};

const initialState: UserState = {
  authState: AuthState.NotAuthenticated,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email, password } = action.payload;

      if (email === "smudasir256@gmail.com" && password === "mudasir123") {
        state.authState = AuthState.Authenticated;
        state.user = {
          id: "1",
          name: "Test User",
          email,
        };
      }
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
