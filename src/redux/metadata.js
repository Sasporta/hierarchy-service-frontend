import { createSlice } from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
  name: 'metadata',
  initialState: {
    employees: [],
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
});

export const { setEmployees } = companiesSlice.actions;

export default companiesSlice.reducer;
