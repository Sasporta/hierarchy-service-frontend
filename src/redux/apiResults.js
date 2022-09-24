import { createSlice } from '@reduxjs/toolkit';

export const apiResultsSlice = createSlice({
  name: 'apiResults',
  initialState: {},
  reducers: {
    saveResult: (state, { payload }) => {
      state[payload.query] = payload.result;
    },
  },
});

export const { saveResult } = apiResultsSlice.actions;

export default apiResultsSlice.reducer;
