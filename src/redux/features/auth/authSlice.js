import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userName: null,
    role: null,
  },
  reducers: {
    setAuth: (state, action) => {
      const { isAuthenticated, userName, role } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.userName = userName;
      state.role = role;
    },
    // Добавьте другие действия, если необходимо (например, выход из системы)
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
