import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as userSignOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';

export const signUpAsync = createAsyncThunk(
  'user/sign_up',
  async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      console.log({ error });
      return { error };
    }
  }
);

export const signInAsync = createAsyncThunk(
  'user/sign_in',
  async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      return { error };
    }
  }
);

export const signOutAsync = createAsyncThunk('user/sign_out', async () => {
  try {
    await userSignOut(auth);
    return;
  } catch (error) {
    return { error };
  }
});

const initialState = {
  userCredential: {},
  errorSignUp: {},
  errorSignIn: {},
  errorSignOut: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.userCredential = action.payload.userCredential;
      state.errorSignUp = action.payload.errorSignUp;
    },
    signIn: (state, action) => {
      state.userCredential = action.payload.userCredential;
      state.errorSignIn = action.payload.errorSignIn;
    },
    signOut: (state, action) => {
      state.userCredential = action.payload.userCredential;
      state.errorSignOut = action.payload.errorSignOut;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.rejected, (state, error) => {
        state.errorSignUp = error;
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload;
      })
      .addCase(signInAsync.rejected, (state, error) => {
        state.errorSignIn = error;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload;
      })
      .addCase(signOutAsync.rejected, (state, error) => {
        state.errorSignOut = error;
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload;
      });
  },
});

export const { signUp, signIn, signOut } = userSlice.actions;

export const selectUserCredential = (state) => state.user.userCredential;
export const selectErrorSignUp = (state) => state.user.errorSignUp;
export const selectErrorSignIn = (state) => state.user.errorSignIn;
export const selectErrorSignOut = (state) => state.user.errorSignOut;

export default userSlice.reducer;
