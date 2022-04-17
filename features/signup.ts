import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SignUpState, SignUpType } from '../types/signup';
import type { AppState } from '../app/store';

const initialState: SignUpState = {
  type: 'email',
  stepIdx: 0,
  sex: 0,
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setSignUpType: (state, action: PayloadAction<SignUpType>) => {
      state.type = action.payload;
    },
    nextStep: (state) => {
      state.stepIdx += 1
    },
    prevStep: (state) => {
      if (state.stepIdx > 0) {
        state.stepIdx -= 1
      }
    },
    setSignUpStep: (state, action: PayloadAction<number>) => {
      state.stepIdx = action.payload;
    },
    setSignUpSex: (state, action: PayloadAction<number>) => {
      state.sex = action.payload;
    },
  },
})

export const {
  setSignUpType,
  nextStep,
  prevStep,
  setSignUpStep,
  setSignUpSex,
} = signupSlice.actions;

export const selectSignUpType = (state: AppState) => state.signup.type;
export const selectSignUpStep = (state: AppState) => state.signup.stepIdx;

export default signupSlice.reducer;
