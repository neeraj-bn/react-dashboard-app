import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../types';

interface UserState {
  userData: UserData[];
  unsavedChanges: boolean;
}

const initialState: UserState = {
  userData: JSON.parse(localStorage.getItem('userData') || '[]'),
  unsavedChanges: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserData>) => {
      state.userData.push(action.payload);
      localStorage.setItem('userData', JSON.stringify(state.userData));
      state.unsavedChanges = false;
    },
    setUnsavedChanges: (state, action: PayloadAction<boolean>) => {
      state.unsavedChanges = action.payload;
    },
  },
});

export const { addUser, setUnsavedChanges } = userSlice.actions;
export default userSlice.reducer;