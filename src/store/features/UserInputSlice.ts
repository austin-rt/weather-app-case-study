import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type InputState = {
  input: string;
};

const initialState: InputState = {
  input: '',
};

export const UserInputSlice = createSlice({
  name: 'UserInputSlice',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

export const { setInput } = UserInputSlice.actions;

export default UserInputSlice.reducer;
