import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as userSignOut,
} from 'firebase/auth';
import Cookies from 'js-cookie';
import { auth } from '../config/firebase';

export const signUpAsync = createAsyncThunk(
  'user/sign_up',
  async ({ email, password }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        email: user.providerData[0].email,
        refreshToken: user.stsTokenManager.refreshToken,
        accessToken: user.stsTokenManager.accessToken,
        expirationTime: user.stsTokenManager.expirationTime,
      };
    } catch (error) {
      throw new Error(error);
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
      console.log(userCredential);
      return userCredential;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
);

export const signOutAsync = createAsyncThunk('user/sign_out', async () => {
  try {
    await userSignOut(auth);
    return;
  } catch (error) {
    throw new Error(error);
  }
});

const initialState = {
  userCredential: '',
  errorSignUp: '',
  errorSignIn: '',
  errorSignOut: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCookie: (state, action) => {
      Cookies.set(action.payload.cookieName, state.userCredential, {
        expires: 1, // day
        secure: true,
        sameSite: 'strict',
        path: '/', // all path
      });
    },
    getCookie: (state, action) => {
      state.userCredential = Cookies.get(action.payload.cookieName);
    },
    removeCookie: (state, action) => {
      Cookies.remove(action.payload.cookieName);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.rejected, (state, { error }) => {
        state.errorSignUp = error.message.slice(25, 65); // at 0,25 => FirebaseError: Firebase:
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload;
      })
      .addCase(signInAsync.rejected, (state, { error }) => {
        state.errorSignIn = error.message.slice(25, 65);
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload;
      })
      .addCase(signOutAsync.rejected, (state, { error }) => {
        state.errorSignOut = error.message.slice(25, 65);
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.userCredential = action.payload;
      });
  },
});

export const { setCookie, getCookie, removeCookie } = userSlice.actions;

export const selectUserCredential = (state) => state.user.userCredential;
export const selectErrorSignUp = (state) => state.user.errorSignUp;
export const selectErrorSignIn = (state) => state.user.errorSignIn;
export const selectErrorSignOut = (state) => state.user.errorSignOut;

export default userSlice.reducer;
