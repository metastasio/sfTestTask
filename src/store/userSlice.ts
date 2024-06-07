import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    signedIn: false,
    email: null,
    userId: null,
    status: 'idle',
    icon: null,
    error: null,
  },
  reducers: {
    logOut(state, { payload }) {
      state.status = 'idle';
      state.signedIn = true;
      state.email = payload.email;
      state.userId = payload.uid;
      state.icon = payload?.icon;
      state.error = null;
    },
  },
});
export const { logOut } = userSlice.actions;

export default userSlice.reducer;
