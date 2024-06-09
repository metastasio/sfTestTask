import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  signedIn: boolean;
  email: FormDataEntryValue | null;
  userName: string;
  error: string | null;
  isProfileClosed: boolean;
};

const initialState: InitialState = {
  signedIn: false,
  email: null,
  userName: '',
  error: null,
  isProfileClosed: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, { payload }: PayloadAction<FormDataEntryValue>) {
      state.signedIn = true;
      state.email = payload;
      state.userName = 'Михаил';
      state.error = null;
    },
    logOut(state) {
      state.signedIn = false;
      state.email = null;
      state.userName = '';
      state.error = null;
      state.isProfileClosed = true;
    },

    toggleProfile(state) {
      state.isProfileClosed = state.isProfileClosed ? false : true;
    },
  },
});
export const { logIn, logOut, toggleProfile } = userSlice.actions;

export default userSlice.reducer;
