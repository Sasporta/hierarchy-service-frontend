import { createSlice } from '@reduxjs/toolkit';

export const hierarchySlice = createSlice({
  name: 'hierarchy',
  initialState: {
    hierarchy: {},
    hierarchyLevel: null,
    noSubordinatesList: {},
  },
  reducers: {
    setHierarchy: (state, { payload }) => {
      state.hierarchy[payload.level] = payload.employees;
    },
    setHierarchyLevel: (state, action) => {
      state.hierarchyLevel = action.payload;
    },
    setNoSubordinatesList: (state, action) => {
      state.noSubordinatesList[action.payload] = true;
    },
  },
});

export const { setHierarchy, setHierarchyLevel, setNoSubordinatesList } =
  hierarchySlice.actions;

export default hierarchySlice.reducer;
